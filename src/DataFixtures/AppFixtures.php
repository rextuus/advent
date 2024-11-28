<?php

namespace App\DataFixtures;

use App\Entity\Choice;
use App\Entity\Question;
use App\Entity\User;
use App\Entity\WinStage;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Dotenv\Dotenv;

class AppFixtures extends Fixture
{


    public function __construct(
        #[Autowire('%env(USER_PASSWORD)%')]
        private readonly string $userPassword,
    )
    {
    }

    private function getRandomText(): string
    {
        $randomTexts = [
            "Lorem ipsum",
            "Dolor sit amet",
            "Consectetur adipiscing",
            "Elit sed do",
            "Eiusmod tempor",
            "Incididunt ut labore",
            "Et dolore magna",
            "Ut enim ad",
            "Minim veniam",
            "Quis nostrud",
            "Exercitation ullamco laboris",
            "Nisi ut aliquip"
        ];

        $emojis = [
            "😀",
            "🎉",
            "🚀",
            "💡",
            "🐱‍👤",
            "🌟",
            "🔥",
            "🍀",
            "🌈",
            "🎈"
        ];

        $text = $randomTexts[array_rand($randomTexts)];
        $emoji = $emojis[array_rand($emojis)];

        return "{$text} {$emoji}";
    }

    public function load(ObjectManager $manager): void
    {
        $raw = $this->getQuestionsRaw();

        for ($i = 1; $i <= 24; $i++) {
            // Create a sample question
            $question = new Question();
            $question->setContent("Tür {$i} ist leider noch nicht fertig. Frag Wolfgang weshalb!!");
            $question->setDoorNumber($i);
            $question->setImageUrl(
                'https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            );

            $door = $i-1;
            if (array_key_exists($door, $raw)) {
                $question->setContent($raw[$door]['content']);
                $question->setImageUrl($raw[$door]['imageUrl']);

                foreach ($raw[$door]['choices'] as $choiceRaw){
                    $choice = new Choice();
                    $choice->setContent($choiceRaw['content'])
                        ->setResponse($choiceRaw['response']) // Assume the first choice is correct
                        ->setResponseImageUrl($choiceRaw['responseImageUrl']) // Assume the first choice is correct

                        ->setCorrect($choiceRaw['correct'])
//                        ->setTextCorrect($choiceRaw['textCorrect'])
//                        ->setTextIncorrect($choiceRaw['textIncorrect'])
//                        ->setUrlCorrect($choiceRaw['urlCorrect'])
//                        ->setUrlIncorrect($choiceRaw['urlIncorrect'])
                        ->setQuestion($question);

                    $manager->persist($choice);

                }
            }else{
                // Create sample choices
                for ($j = 1; $j <= 3; $j++) {
                    $choice = new Choice();
                    $choice->setContent("Choice {$j} for Question {$i}: " . $this->getRandomText())
                        ->setResponse($j === 2 ? "Du bist süß. Darum ist diese Antwort korrekt." : "Das ist leider falsch kleine Bipfelkönigin") // Assume the first choice is correct
                        ->setResponseImageUrl($j === 2 ? "https://media.tenor.com/XEW8qfvkdSgAAAAM/snoop-dogg-dancing.gif" : "https://i.gifer.com/1Ibv.gif") // Assume the first choice is correct
                        ->setCorrect($j === 2)
//                        ->setTextCorrect('Du bist süß. Darum ist diese Antwort korrekt.')
//                        ->setTextIncorrect('Das ist falsch kleine Bipfelkönigin')
//                        ->setUrlCorrect('https://media.tenor.com/XEW8qfvkdSgAAAAM/snoop-dogg-dancing.gif')
//                        ->setUrlCorrect('<iframe width="1280" height="720" src="https://www.youtube.com/embed/iN-mVVpuNcQ" title="Heute 5 gegen Willi!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
//                        ->setUrlIncorrect('<iframe width="558" height="992" src="https://www.youtube.com/embed/pB-G3_k-ypg?autoplay=1" title="Harry Potter Techno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen allow="autoplay"></iframe>')
//                        ->setUrlIncorrect('<iframe width="558" height="992" src="https://www.youtube.com/embed/pB-G3_k-ypg" title="Harry Potter Techno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
                        ->setQuestion($question);

                    // Persist the choice
                    $manager->persist($choice);
                }
            }



            // Persist the question
            $manager->persist($question);
        }

        $winStage1 = new WinStage();
        $winStage1->setWinText('Das Kleingeld von meiner Fensterbank🫰');
        $winStage1->setPointBorder(0);
        $winStage1->setPointText('0 Punkte');

        $winStage2 = new WinStage();
        $winStage2->setWinText('Du darfst dir eine Woche meine PS5 ausleihen🎮');
        $winStage2->setPointBorder(1);
        $winStage2->setPointText('1-4 Punkte');

        $winStage3 = new WinStage();
        $winStage3->setWinText('Ein eigener Tesa-Abroller🤩');
        $winStage3->setPointBorder(5);
        $winStage3->setPointText('5-12 Punkte');

        $winStage4 = new WinStage();
        $winStage4->setWinText('Sushi-Ninja Sushi🍣. Frittieres sogar');
        $winStage4->setPointBorder(13);
        $winStage4->setPointText('13-18 Punkte');

        $winStage5 = new WinStage();
        $winStage5->setWinText('Du darfst dir vom Entwickler wünnschen was immer du willst🌠');
        $winStage5->setPointBorder(19);
        $winStage5->setPointText('19-24 Punkte');

        $manager->persist($winStage1);
        $manager->persist($winStage2);
        $manager->persist($winStage3);
        $manager->persist($winStage4);
        $manager->persist($winStage5);

        $user = new User();
        $user->setEmail('rextuus@gmail.com');

        $user->setPassword($this->userPassword);
        $user->setRoles(["ROLE_ADMIN"]);
        $manager->persist($user);

        // Flush to save to database
        $manager->flush();
    }

    public function getQuestionsRaw(): array
    {
        $questions = [];
        $files = glob(__DIR__ . '/../../data/question/*.json');

        foreach ($files as $file) {
            $content = file_get_contents($file);
            $question = json_decode($content, true);

            if (json_last_error() === JSON_ERROR_NONE) {
                $questions[] = $question;
            } else {
                // Handle JSON parse error if necessary
            }
        }

        return $questions;
    }

    public function updateDoor(EntityManagerInterface $manager, int $doorNumber): bool
    {
        // Load the raw data
        $raw = $this->getQuestionsRaw();
        $door = $doorNumber - 1;

        if (!array_key_exists($door, $raw)) {
            return false;
        }

        // Find existing Question or create a new one
        $questionRepo = $manager->getRepository(Question::class);
        $question = $questionRepo->findOneBy(['doorNumber' => $doorNumber]);

        if (!$question) {
            $question = new Question();
        }

        // Update the Question entity with raw data
        if (array_key_exists($door, $raw)) {
            $question->setContent($raw[$door]['content']);
            $question->setImageUrl($raw[$door]['imageUrl']);
            $question->setDoorNumber($doorNumber);

            // Remove existing choices for the question
            foreach ($question->getChoices() as $choice) {
                $manager->remove($choice);
            }

            // Add new choices
            foreach ($raw[$door]['choices'] as $choiceRaw) {
                $choice = new Choice();
                $choice->setContent($choiceRaw['content'])
                    ->setResponse($choiceRaw['response']) // Assuming the first choice is correct
                    ->setCorrect($choiceRaw['correct'])
                    ->setResponseImageUrl($choiceRaw['responseImageUrl'])
                    ->setQuestion($question);
                $manager->persist($choice);
            }
        }

        // Persist the Question entity
        $manager->persist($question);

        // Flush to save changes to the database
        $manager->flush();

        return true;
    }
}