<?php

namespace App\Twig\Components;

use App\Entity\Choice;
use App\Entity\Question;
use App\Repository\QuestionRepository;
use DateTime;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class DoorArea
{
    public const USER_MODE = 1;
    public const DEMO_MODE = 2;
    public const DEV_MODE = 3;

    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public bool $doorClicked = false;
    #[LiveProp]
    public int $chosenDoor = -2;

    #[LiveProp]
    public int $displayMode = -2;

    #[LiveProp(updateFromParent: true) ]
    public int $choiceNr = -2;

    #[LiveProp]
    public int $isDevTest;

    public function __construct(private QuestionRepository $questionRepository)
    {
    }

    public function isDevTestMode(): bool
    {
        return $this->isDevTest === self::DEV_MODE;
    }

    public function isDemoMode(): bool
    {
        return $this->isDevTest === self::DEMO_MODE;
    }

    /**
     * @return array<Question>
     */
    public function getQuestions(): array
    {
        return $this->questionRepository->findBy([], ['doorNumber' => 'ASC']);
    }

    #[LiveAction]
    public function openClickedDoor(#[LiveArg] int $door): void
    {
        $this->chosenDoor = $door;
        $this->displayMode = 1;
    }

    public function getAnswersForCurrentDoor(): array
    {
        $questions = $this->questionRepository->findAll();
        $door = $this->chosenDoor - 1;

        if (array_key_exists($door, $questions)) {
            $question = $questions[$door];
            $choices = $question->getChoices()->toArray();

            return array_map(fn(Choice $choice) => $choice->getContent(), $choices);
        }

        return [];
    }

    public function getDayBorder(): int
    {
        return (int) (new DateTime())->format('j');
    }

    public function isDoorUnlocked(int $day, ?DateTime $overrideDate = null): bool
    {
        if ($this->isDevTest === self::DEV_MODE) {
            return true;
        }

        // Define the start date of the advent calendar
        $startDate = new DateTime('01.12.2024');
        // Use the override date if provided; otherwise, use the current date
        $currentDate = $overrideDate ?? new DateTime();

        // Extract the current day and month
        $currentDayOfMonth = (int)$currentDate->format('d');
        $currentMonth = (int)$currentDate->format('m');

        $isUnlocked = false;
        // Check if the door is within the advent calendar's range
        if ($day >= 1 && $day <= 24) {
            // Allow door opening after December 1st for doors up to the current day
            // Allow opening any door after December
            $isUnlocked = ($currentDayOfMonth >= $day && $currentMonth == 12) || ($currentMonth > 12);
        }

        // demo mode is only available for already opened doors. Otherwise Jana can check out the correct answers => Hacking
        if ($this->isDemoMode() && $isUnlocked) {
            $questions = $this->questionRepository->findBy(['doorNumber' => $day]);

            if (array_key_exists(0, $questions)) {
                $question = $questions[0];

                if ($question->getOpened() === null) {
                    $isUnlocked = false;
                }
            }
        }

        return $isUnlocked;
    }
}
