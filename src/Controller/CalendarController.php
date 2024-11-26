<?php

namespace App\Controller;

use App\Form\QuizData;
use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CalendarController extends AbstractController
{
    #[Route('/calendar', name: 'app_calendar')]
    public function index(): Response
    {
        return $this->render('calendar/index.html.twig', [
        ]);
    }
}
