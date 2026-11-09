<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Setzt das Passwort eines Kontos neu (fragt es verdeckt ab) und legt das Konto bei Bedarf an.
 * Beispiel: php bin/console app:user:set-password rextuus@gmail.com --admin
 */
#[AsCommand(name: 'app:user:set-password', description: 'Passwort eines Kontos setzen (legt das Konto mit --create an)')]
class SetPasswordCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserPasswordHasherInterface $passwordHasher,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::REQUIRED, 'E-Mail-Adresse des Kontos')
            ->addOption('create', null, InputOption::VALUE_NONE, 'Konto anlegen, falls es fehlt')
            ->addOption('admin', null, InputOption::VALUE_NONE, 'Rolle ROLE_ADMIN vergeben');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');

        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $email]);
        if (null === $user) {
            if (!$input->getOption('create')) {
                $io->error("Kein Konto {$email} – zum Anlegen --create angeben.");

                return Command::FAILURE;
            }
            $user = (new User())->setEmail($email);
            $this->entityManager->persist($user);
        }

        $password = $io->askHidden('Neues Passwort (mindestens 12 Zeichen)');
        if (null === $password || mb_strlen($password) < 12) {
            $io->error('Passwort fehlt oder ist kürzer als 12 Zeichen.');

            return Command::FAILURE;
        }
        if ($password !== $io->askHidden('Passwort wiederholen')) {
            $io->error('Die Passwörter stimmen nicht überein.');

            return Command::FAILURE;
        }

        $user->setPassword($this->passwordHasher->hashPassword($user, $password));
        if ($input->getOption('admin')) {
            $user->setRoles(array_values(array_unique([...$user->getRoles(), 'ROLE_ADMIN'])));
        }
        $this->entityManager->flush();

        $io->success("Passwort für {$email} gesetzt.");

        return Command::SUCCESS;
    }
}
