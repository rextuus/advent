<?php

namespace App\Controller;

use App\Form\QuizData;
use App\Repository\QuestionRepository;
use App\Twig\Components\DoorArea;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CalendarController extends AbstractController
{
    #[Route('/', name: 'app_calendar')]
    public function index(): Response
    {
        return $this->render('calendar/index.html.twig', [
            'isDevTest' => DoorArea::USER_MODE,
        ]);
    }

    #[Route('/devtest', name: 'app_calendar_dev')]
    public function test(): Response
    {
        return $this->render('calendar/index.html.twig', [
            'isDevTest' => DoorArea::DEV_MODE,
        ]);
    }

    #[Route('/demo', name: 'app_calendar_demo')]
    public function demo(): Response
    {
        return $this->render('calendar/index.html.twig', [
            'isDevTest' => DoorArea::DEMO_MODE,
        ]);
    }
}
