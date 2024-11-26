<?php

namespace App\DataFixtures;

use App\Entity\Choice;
use App\Entity\Question;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
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
                        ->setResponse('') // Assume the first choice is correct
                        ->setCorrect($choiceRaw['correct'])
                        ->setTextCorrect($choiceRaw['textCorrect'])
                        ->setTextIncorrect($choiceRaw['textIncorrect'])
                        ->setQuestion($question);

                    $manager->persist($choice);

                }
            }else{
                // Create sample choices
                for ($j = 1; $j <= 3; $j++) {
                    $choice = new Choice();
                    $choice->setContent("Choice {$j} for Question {$i}: " . $this->getRandomText())
                        ->setResponse($j === 2 ? "Correct" : "Incorrect") // Assume the first choice is correct
                        ->setCorrect($j === 2)
                        ->setTextCorrect('Du bist süß. Darum ist diese Antwort korrekt.')
                        ->setTextIncorrect('Das ist falsch kleine Bipfelkönigin')
                        ->setQuestion($question);

                    // Persist the choice
                    $manager->persist($choice);
                }
            }



            // Persist the question
            $manager->persist($question);
        }

        // Flush to save to database
        $manager->flush();
    }

    public function getQuestionsRaw(): array
    {
        return [
            [
                'content' => 'Wie machst du deine Adventskalendertürchen für gewöhnlich auf:',
                'imageUrl' => 'https://images.unsplash.com/photo-1606805421441-82687fd40af9?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'choices' => [
                    [
                        'content' => 'Wie eine kleine Streberin natürlich: Täglich',
                        'correct' => true,
                        'textCorrect' => 'Brav. Genau so soll es sein',
                        'textIncorrect' => '-'
                    ],
                    [
                        'content' => 'Wie eine verwöhnte Targaryen Prinzessin: Alle auf einmal und schon vor Weihnachten',
                        'correct' => false,
                        'textCorrect' => '-',
                        'textIncorrect' => 'Was anderes hätte ich auch nicht erwartet.'
                    ],
                    [
                        'content' => 'Wie eine gestresste Studentin: Alle auf einmal und erst an Weihnachten',
                        'correct' => false,
                        'textCorrect' => '-',
                        'textIncorrect' => 'Das kann ich verstehen. Aber bei so einem tollen Adventskalender wie diesem hier, ist das trotzdem die falsche Antwort.'
                    ]
                ]
            ]
        ];
    }
}