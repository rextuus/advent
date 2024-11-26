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
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public bool $doorClicked = false;
    #[LiveProp]
    public int $chosenDoor = -2;

    #[LiveProp]
    public int $displayMode = -2;

    #[LiveProp(updateFromParent: true) ]
    public int $choiceNr = -2;

    public function __construct(private QuestionRepository $questionRepository)
    {
    }

    /**
     * @return array<Question>
     */
    public function getQuestions(): array
    {
        return $this->questionRepository->findBy([], ['doorNumber' => 'ASC']);
    }

    public function getImageUrl(): string
    {

        return $this->doorClicked
            ? 'https://path-to-new-image.jpg'
            : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/merry-xmas.svg';
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

    public function isDoorUnlocked(int $day): bool
    {
        $startDate = new DateTime('01.11.2024');
        $endDate = new DateTime('30.11.2024');
        $currentDate = new DateTime();


        // Check if the current date allows the door to be opened
        if ($currentDate >= $startDate && $currentDate <= $endDate) {
            return true;
        }

        return false;
    }
}
