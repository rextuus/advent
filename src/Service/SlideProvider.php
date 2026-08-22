<?php

namespace App\Service;

class SlideProvider
{
    public function getSlides(): array
    {
        return [
            [
                'id' => 'intro-welcome',
                'title' => 'Ein Lebensjahr mit Kristin',
                'text' => 'Willkommen zu diesem ganz besonderen Geburtstagsrückblick!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787060926/Kristin/Intro_yxdrnc.jpg',
            ],
            [
                'id' => 'intro-role',
                'title' => 'Wer bist du eigentlich?',
                'text' => 'Bevor es losgeht, müssen wir kurz überprüfen, mit wem wir es hier zu tun haben...',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787062775/Kristin/intro_3_jn0yu5.jpg', // Hier kannst du später einfach den Link für das 2. Bild austauschen!
            ],
            [
                'id' => 'neptunbad-aussen',
                'title' => 'Das Neptunbad',
                'text' => 'Unser absoluter Lieblingsort für Entspannung...',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787051133/Kristin/Neptunbad_ebnqks.jpg',
            ],
            [
                'id' => 'neptunbad-sauna',
                'title' => 'Der perfekte Abend',
                'text' => 'Aber vor jedem Besuch stellt sich immer wieder die eine wichtige Frage...',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787051137/Kristin/Neptunbad_Sauna_wgau40.jpg',
            ],
            [
                'id' => 'autobahn-fahrt',
                'title' => 'Unterwegs auf der A3',
                'text' => 'Egal ob Kurztrip oder Heimweg – auf der Autobahn halten wir immer die Augen offen.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787055494/Kristin/Autobahn_kfmrc3.jpg',
            ],
            [
                'id' => 'kennzeichen-game',
                'title' => 'Die Kennzeichen-Jägerin',
                'text' => 'Trage die passenden Kennzeichen ein, um den geheimen Geburtstags-Text freizuschalten!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787055500/Kristin/Nummernschild_ihdx5u.jpg',
            ],
            [
                'id' => 'rio-intro',
                'title' => 'Unser erster Urlaub: Rio de Janeiro 🇧🇷',
                'text' => 'Erinnerst du dich noch daran, wie wir im Restaurant auf unser Essen gewartet haben? Um die Zeit zu vertreiben, gab es nur ein Heilmittel...',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787057295/Kristin/Rio_lcjmzo.jpg',
            ],
            [
                'id' => 'rio-kniffel',
                'title' => 'Die Kniffel-Challenge 🎲',
                'text' => 'Das Essen lässt auf sich warten! Würfele, bis du mindestens ein Full House, Viererpasch oder Kniffel erzielst!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787057354/Kristin/Kniffel_p1n3mf.jpg',
            ],
            [
                'id' => 'taylor-kardashian-intro',
                'title' => 'The Era of Keeping Up with Kristin',
                'text' => 'Egal ob unendliches Drama im Calabasas-Clan oder das perfekte Easter Egg in einem Taylor-Swift-Album – wer diesen Lifestyle versteht, versteht dich.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787354728/Kristin/Instagram_xjbzle.jpg', // Doppelter Platzhalter
            ],
            [
                'id' => 'taylor-kardashian-game',
                'title' => 'The Ultimate Pop-Culture Quiz',
                'text' => 'Wer oder was steckt hinter diesen Weisheiten? Finde es heraus!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787354722/Kristin/Magazine_xseecf.jpg', // Hier später das 2. Bild einfügen!
            ],
            [
                'id' => 'food-intro',
                'title' => 'Königlicher Spargel & Die Hollandaise-Frage',
                'text' => 'Ein feines Gericht braucht die perfekte Balance. Aber bei Kristin gilt: Ist es wirklich genug Soße, wenn man den Spargel noch sieht?',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787397263/Kristin/Spargel_tp0fep.jpg',
            ],
            [
                'id' => 'food-game',
                'title' => 'Das Hollandaise-Gießen',
                'text' => 'Halte den Button gedrückt, um die Sauce Hollandaise über den Spargel zu gießen. Dosiere genau nach Kristins Geschmack!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787397448/Kristin/Saucen_kzhqfn.jpg',
            ],
            [
                'id' => 'taste-tinder',
                'title' => 'Kristins Food Match',
                'text' => 'Wische nach rechts für Top, nach links für Flop! Triffst du Kristins kulinarischen Geschmack?',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787397448/Kristin/Saucen_kzhqfn.jpg',
            ],
            [
                'id' => 'macbook-uniklinik',
                'title' => 'MacBook in der Uniklinik',
                'text' => 'Du arbeitest fleißig an deinem MacBook – und der IT-Support sagt nur: "Mac? Dafür haben wir leider kein Ticket!" 💻',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787052615/Kristin/Macbook_rkqas5.jpg',
            ],
            [
                'id' => 'it-hacking',
                'title' => 'Home-Support',
                'text' => 'Gut, dass du deinen eigenen Admin zu Hause hast. Aber weißt du eigentlich, woran ich hier jeden Tag wirklich arbeite?',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787052618/Kristin/Hacking_ugsuue.jpg',
            ],
        ];
    }

    public function getSaunaQuestion(): array
    {
        return [
            'question' => 'Wann gehen wir heute in die ganz heiße Sauna?',
            'optionA' => 'Um 19:00 Uhr',
            'optionB' => 'Um 21:00 Uhr',
            'theonImage' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787054435/Kristin/Theon_vbzdlu.png',
            'kumpirImage' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787054549/Kristin/Kumpir_iizlwi.jpg',
        ];
    }

    public function getKennzeichenRiddle(): array
    {
        return [
            'items' => [
                ['city' => 'Minden', 'code' => 'MI', 'hint' => 'Deine Heimat 🏡'],
                ['city' => 'Lübbecke', 'code' => 'LK', 'hint' => 'Direkt nebenan 📍'],
                ['city' => 'Köln', 'code' => 'K', 'hint' => 'Unser Zuhause 🏛️'],
                ['city' => 'Hamburg', 'code' => 'HH', 'hint' => 'Moin Moin am Hafen ⚓'],
                ['city' => 'Villingen-Schwenningen', 'code' => 'VS', 'hint' => 'Schwarzwald-Baar 🌲'],
            ],
        ];
    }
}