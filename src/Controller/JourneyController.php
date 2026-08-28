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
            'crosswordData' => $this->slideProvider->getCrosswordData(),
        ]);
    }

    #[Route('/testing', name: 'app_journey_testing', methods: ['GET'])]
    public function testing(): Response
    {
        return $this->render('journey/testing.html.twig', [
            'slides' => $this->slideProvider->getSlides(),
            'saunaQuestion' => $this->slideProvider->getSaunaQuestion(),
            'kennzeichenRiddle' => $this->slideProvider->getKennzeichenRiddle(),
            'crosswordData' => $this->slideProvider->getCrosswordData(),
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
                'message' => 'Exakt! Erst der legendäre Aufguss von Theon, und danach gibt es guten Gewissens noch einen Kumpir!',
            ]);
        }

        return $this->json([
            'success' => false,
            'message' => 'Bist du sicher, dass das wirklich schon der heißeste Aufguss ist? Denk nochmal an Theon...',
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
                'message' => 'Absoluter Profi! Alle Kennzeichen geknackt!',
            ]);
        }

        return $this->json([
            'success' => false,
            'message' => sprintf('Du hast %d von %d Kennzeichen richtig. Schau noch mal genau hin!', $correctCount, count($items)),
        ]);
    }

    #[Route('/api/kniffel-roll', name: 'app_journey_kniffel_roll', methods: ['POST'])]
    public function handleKniffelRoll(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $attempts = $data['attempts'] ?? 0;
        $currentDice = $data['dice'] ?? [];
        $heldDice = $data['held'] ?? [];

        $dice = [];
        for ($i = 0; $i < 5; $i++) {
            if (isset($heldDice[$i]) && $heldDice[$i]) {
                $dice[] = $currentDice[$i] ?? rand(1, 6);
            } else {
                $dice[] = rand(1, 6);
            }
        }

        if ($attempts < 3) {
            return $this->json([
                'dice' => $dice,
                'success' => false,
                'message' => $this->getMessageForAttempts($attempts),
            ]);
        }

        // 3rd attempt: Calculate scores
        return $this->json([
            'dice' => $dice,
            'success' => true,
            'scores' => $this->calculateScores($dice),
            'message' => 'Wähle eine Kategorie für dein Ergebnis!',
        ]);
    }

    private function getMessageForAttempts(int $attempts): string
    {
        if ($attempts > 2) {
            return 'Es bleibt zäh... Kristin wird langsam ungeduldig!';
        }
        return 'Gleich nochmal würfeln!';
    }

    private function calculateScores(array $dice): array
    {
        $counts = array_count_values($dice);
        $scores = [];
        
        // Upper section
        for ($i = 1; $i <= 6; $i++) {
            $scores["{$i}er"] = ($counts[$i] ?? 0) * $i;
        }
        
        // Lower section
        $scores['3er-pasch'] = (max($counts) >= 3) ? array_sum($dice) : 0;
        $scores['4er-pasch'] = (max($counts) >= 4) ? array_sum($dice) : 0;
        $scores['full-house'] = (in_array(3, $counts) && in_array(2, $counts)) ? 25 : 0;
        
        sort($dice);
        $uniqueDice = array_unique($dice);
        $straight = implode('', $uniqueDice);
        $scores['kleine-strasse'] = (str_contains($straight, '1234') || str_contains($straight, '2345') || str_contains($straight, '3456')) ? 30 : 0;
        $scores['grosse-strasse'] = (str_contains($straight, '12345') || str_contains($straight, '23456')) ? 40 : 0;
        $scores['kniffel'] = (max($counts) === 5) ? 50 : 0;
        $scores['chance'] = array_sum($dice);
        
        return $scores;
    }

    #[Route('/api/run-code', name: 'app_journey_run_code', methods: ['POST'])]
    public function handleRunCode(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $variable = $data['variable'] ?? null;

        if ($variable === 'kristin') {
            return $this->json([
                'success' => true,
                'output' => "Status: 200 OK\n\n// Wolf's Life Konfiguration...\nErgebnis: Kristin macht Wolfs das Leben viel viel schöner.",
            ]);
        }

        if ($variable === 'kaffee') {
            return $this->json([
                'success' => false,
                'output' => "Status: 418 I'm a teapot\n\nKaffee ist zwar essenziell, bringt aber alleine noch kein Herzschmelzen. Versuch es nochmal!",
            ]);
        }

        return $this->json([
            'success' => false,
            'output' => "Status: 500 Internal Error\n\nSchlafen ist schön, bringt das Programm aber zum Stillstand. Wähle lieber die wichtigere Variable!",
        ]);
    }
}