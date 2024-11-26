<?php

namespace App\Twig\Components;

use App\Form\QuizData;
use App\Form\QuizType;
use App\Repository\QuestionRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class QuizForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;

    #[LiveProp]
    public ?QuizData $initialFormData = null;

    #[LiveProp(updateFromParent: true) ]
    public ?array $answers = [];

    #[LiveProp(updateFromParent: true) ]
    public int $chosenDoor = -2;

    #[LiveProp(updateFromParent: true) ]
    public int $displayMode = -2;

    #[LiveProp(updateFromParent: true) ]
    public int $choiceNr = -2;

    public function __construct(private readonly QuestionRepository $questionRepository)
    {
    }

    protected function instantiateForm(): FormInterface
    {
        if (null === $this->initialFormData) {
            $this->initialFormData = new QuizData();
        }

        return $this->createForm(QuizType::class, $this->initialFormData, ['answers' => $this->answers]);

    }

    #[LiveAction]
    public function save(EntityManagerInterface $entityManager): void
    {
        // Submit the form! If validation fails, an exception is thrown
        // and the component is automatically re-rendered with the errors
        $this->submitForm();

        /** @var QuizData $data */
        $data = $this->getForm()->getData();
        if ($data->answer === null){
            $data->answer = '0';
        }

        $choice = (int) $data->answer;

        $question = $this->questionRepository->findOneBy(['doorNumber' => $this->chosenDoor]);

        $question->setOpened(new DateTimeImmutable());
        $question->setTriggeredChoice($choice);
        $this->questionRepository->getEntityManager()->persist($question);
        $this->questionRepository->getEntityManager()->flush();


        if ($question->getChoices()->get((int) $data->answer)->isCorrect()){
            $this->displayMode = 2;
            $this->choiceNr = (int) $data->answer;
        }else{
            $this->displayMode = 3;
            $this->choiceNr = (int) $data->answer;
        }
//        dd($question->getChoices()->get((int) $data->answer)->getResponse());
    }

    public function showForm(): bool
    {
        return $this->chosenDoor !== -2 && $this->displayMode === 1;
    }

    public function showWinner(): bool
    {
        return $this->displayMode === 2;
    }

    public function getWinnerText(): string
    {
        $question = $this->questionRepository->findOneBy(['doorNumber' => $this->chosenDoor]);
        foreach ($question->getChoices() as $choice){
            if ($choice->isCorrect()){
                return $choice->getTextCorrect();
            }
        }

        return 'This is an error! Ask the bad developer guy to fix this.';
    }

    public function showLooser(): bool
    {
        return $this->displayMode === 3;
    }

    public function getLooserText(): string
    {
        $question = $this->questionRepository->findOneBy(['doorNumber' => $this->chosenDoor]);
        if ($question->getChoices()->get($this->choiceNr) !== null){
            return $question->getChoices()->get($this->choiceNr)->getTextIncorrect();
        }

        return 'This is an error! Ask the bad developer guy to fix this.';
    }

    public function getCurrentPoints(): int
    {
        $points = 0;

        $questions = $this->questionRepository->findAll();
        foreach ($questions as $question){
            if ($question->getOpened() !== null){
                if ($question->getChoices()->get($question->getTriggeredChoice())->isCorrect()){
                    $points = $points + 1;
                }
            }
        }
        return $points;
    }

    public function getQuestionText(): string
    {
        $question = $this->questionRepository->findOneBy(['doorNumber' => $this->chosenDoor]);

        if (null === $question) {
            return 'This is an error! Ask the bad developer guy to fix this.';
        }

        return $question->getContent();
    }

    public function getImageUrl(): string
    {
        $question = $this->questionRepository->findOneBy(['doorNumber' => $this->chosenDoor]);

        return $question->getImageUrl();
    }
}