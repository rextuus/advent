<?php

namespace App\Command;

use App\DataFixtures\AppFixtures;
use App\Entity\Question;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateDoorCommand extends Command
{
    protected static $defaultName = 'app:update-door';
    private $entityManager;
    private $appFixtures;

    public function __construct(EntityManagerInterface $entityManager, AppFixtures $appFixtures)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
        $this->appFixtures = $appFixtures;
    }

    protected function configure()
    {
        $this
            ->setDescription('Update a specific door with data from a JSON file')
            ->addArgument('doorNumber', InputArgument::REQUIRED, 'The door number');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $doorNumber = $input->getArgument('doorNumber');
        
        if (!is_numeric($doorNumber) || $doorNumber < 1 || $doorNumber > 24) {
            $output->writeln('<error>Door number must be between 1 and 24</error>');
            return Command::FAILURE;
        }

        /** @var Question $question */
        $question = $this->entityManager->getRepository(Question::class)->findOneBy(['doorNumber' => $doorNumber]);
        if ($question->getOpened() !== null) {
            $output->writeln('<error>Door ' . $doorNumber . ' has already been opened</error>');
            return Command::FAILURE;
        }

        $res = $this->appFixtures->updateDoor($this->entityManager, (int)$doorNumber);

        if ($res){
            $output->writeln('<info>Door ' . $doorNumber . ' has been updated.</info>');
        }
        $output->writeln('<info>Door ' . $doorNumber . ' could not been updated. Check json file exists</info>');


        return Command::SUCCESS;
    }
}