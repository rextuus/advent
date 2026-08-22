<?php

namespace App\Controller;

use App\Service\SlideProvider;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JourneyController extends AbstractController
{
    public function __construct(
        private readonly SlideProvider $slideProvider
    ) {}

    #[Route('/', name: 'app_journey', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('journey/index.html.twig', [
            'slides' => $this->slideProvider->getSlides(),
            'saunaQuestion' => $this->slideProvider->getSaunaQuestion(),
            'kennzeichenRiddle' => $this->slideProvider->getKennzeichenRiddle(),
        ]);
    }

    #[Route('/api/sauna-choice', name: 'app_journey_sauna_choice', methods: ['POST'])]
    public function handleSaunaChoice(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $selectedTime = $data['choice'] ?? null;

        if ($selectedTime === 'Um 21:00 Uhr') {
            return $this->json([
                'success' => true,
                'message' => 'Exakt! Erst der legendäre Aufguss von Theon, und danach gibt es guten Gewissens noch einen Kumpir! 🥔🔥',
            ]);
        }

        return $this->json([
            'success' => false,
            'message' => 'Bist du sicher, dass das wirklich schon der heißeste Aufguss ist? Denk nochmal an Theon... 😉',
        ]);
    }

    #[Route('/api/kennzeichen-check', name: 'app_journey_kennzeichen_check', methods: ['POST'])]
    public function handleKennzeichenCheck(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $userInputs = $data['inputs'] ?? [];

        $riddle = $this->slideProvider->getKennzeichenRiddle();
        $items = $riddle['items'];

        $correctCount = 0;
        foreach ($items as $index => $item) {
            $input = strtoupper(trim($userInputs[$index] ?? ''));
            if ($input === $item['code']) {
                $correctCount++;
            }
        }

        if ($correctCount === count($items)) {
            return $this->json([
                'success' => true,
                'message' => 'Absoluter Profi! Alle Kennzeichen geknackt! 🎉',
            ]);
        }

        return $this->json([
            'success' => false,
            'message' => sprintf('Du hast %d von %d Kennzeichen richtig. Schau noch mal genau hin!', $correctCount, count($items)),
        ]);
    }

    #[Route('/api/kniffel-roll', name: 'app_journey_kniffel_roll', methods: ['POST'])]
    public function handleKniffelRoll(): JsonResponse
    {
        $dice = [];
        for ($i = 0; $i < 5; $i++) {
            $dice[] = rand(1, 6);
        }

        $counts = array_count_values($dice);
        rsort($counts);

        $isKniffel = ($counts[0] === 5);
        $isFullHouse = ($counts[0] === 3 && isset($counts[1]) && $counts[1] === 2);
        $isFourOfAKind = ($counts[0] >= 4);

        $success = $isKniffel || $isFullHouse || $isFourOfAKind;

        if ($isKniffel) {
            $message = 'KNIFFEL! 50 Punkte! 🎲🔥 Das Essen ist da und schmeckt fantastisch!';
        } elseif ($isFullHouse) {
            $message = 'Full House! 25 Punkte! 🎲 Perfekte Überbrückung – da bringt der Kellner auch schon das Essen!';
        } elseif ($isFourOfAKind) {
            $message = 'Viererpasch! 🎲 Sehr stark gewürfelt, das Essen ist gerettet!';
        } else {
            $message = 'Leider noch kein Bild dabei... Gleich nochmal würfeln! 🇧🇷';
        }

        return $this->json([
            'dice' => $dice,
            'success' => $success,
            'message' => $message,
        ]);
    }

    #[Route('/api/run-code', name: 'app_journey_run_code', methods: ['POST'])]
    public function handleRunCode(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $variable = $data['variable'] ?? null;

        if ($variable === 'kristin') {
            return $this->json([
                'success' => true,
                'output' => "Status: 200 OK ✨\n\nErgebnis nach Millionen Zeilen Code:\nDu bist und bleibst die beste Entscheidung meines Lebens. ❤️",
            ]);
        }

        if ($variable === 'kaffee') {
            return $this->json([
                'success' => false,
                'output' => "Status: 418 I'm a teapot ☕\n\nKaffee ist zwar essenziell, bringt aber alleine noch kein Herzschmelzen. Versuch es nochmal!",
            ]);
        }

        return $this->json([
            'success' => false,
            'output' => "Status: 500 Internal Error 🛋️\n\nSchlafen ist schön, bringt das Programm aber zum Stillstand. Wähle lieber die wichtigere Variable!",
        ]);
    }
}