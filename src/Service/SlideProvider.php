<?php

namespace App\Service;

class SlideProvider
{
    public function getSlides(): array
    {
        return [
            [
                'id' => 'intro-welcome',
                'title' => 'Kristins Geburtstags-Journey',
                'text' => 'Herzlich willkommen zu diesem kleinen Geburtstagsrückblick für Kristin. Heute feiern wir einen ganz besonderen Tag und werfen einen Blick auf die Dinge, die Kristin so besonders machen.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787060926/Kristin/Intro_yxdrnc.jpg',
            ],
            [
                'id' => 'intro-role',
                'title' => 'Kurzer Sicherheitscheck',
                'text' => 'Natürlich wollen wir Kristins größte Geheimnisse nicht jedem wildfremden verraten, der hier landet. Wer bist du überhaupt? Wähle deine Rolle und zeig, dass du zu diesem besonderen Anlass gehörst!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787062775/Kristin/intro_3_jn0yu5.jpg', // Hier kannst du später einfach den Link für das 2. Bild austauschen!
            ],
            [
                'id' => 'neptunbad-aussen',
                'title' => 'Das Neptunbad',
                'text' => 'Als eine der ersten Dinge, die ich über Kristin lernen durfte, ist ihre Leidenschaft für Entspannung – wie zum Beispiel im Neptunbad.',
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
                'text' => 'Egal ob Kurztrip oder Heimweg – auf der Autobahn sind alle immer mit offenen Augen unterwegs. Kristin spielt nämlich zusammen mit ihrer Freundin Anika fleißig Kennzeichen-Sammeln, weshalb man als treuer Beifahrer oft direkt mit eingespannt wird.',
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
                'title' => 'Urlaub in Rio de Janeiro',
                'text' => 'Während wir in Rio de Janeiro lange im Restaurant auf unser Essen warten mussten, habe ich eine überraschende Seite an Kristin entdeckt: Eigentlich ist sie als sehr ungeduldiger Mensch bekannt – aber eben auch dafür, dass sie leidenschaftlich gerne spielt. Und dieses Talent hatte sie sofort als bewährtes Mittel gegen die Langeweile parat.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787057295/Kristin/Rio_lcjmzo.jpg',
            ],
            [
                'id' => 'rio-kniffel',
                'title' => 'Die Kniffel-Challenge',
                'text' => 'Das Essen ließ auf sich warten und Kristin zeigte mir, wie man mit einer Partie Kniffel die Zeit vertreibt. Zeig, ob du auch so würfeln kannst!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787057354/Kristin/Kniffel_p1n3mf.jpg',
            ],
            [
                'id' => 'taylor-kardashian-intro',
                'title' => 'The Era of Keeping Up with Kristin',
                'text' => 'Egal ob unendliches Drama im Calabasas-Clan oder das perfekte Easter Egg in einem Taylor-Swift-Album – ich habe schnell gelernt, dass man diesen Lifestyle verstehen muss, um Kristin zu verstehen.',
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
                'text' => 'Ein feines Gericht braucht die perfekte Balance. Ich bin zwar ein kompletter Soßen-Fanatiker – das hat Kristin inzwischen auch schon herausgefunden –, aber heute gebührt das Lob ihrer Kochkunst. Egal ob Bagels, Ofengemüse oder eine selbstgemachte Pilzrahmsoße: Kristin weiß einfach, wie man richtig gut kocht.',
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
                'text' => 'In der Uniklinik ist die Welt der IT streng genormt. Kristin ist eine der wenigen, die dort mit ihrem MacBook aus der Reihe tanzt – was den Support regelmäßig zu der Antwort veranlasst: "Mac? Dafür haben wir leider kein Ticket!" Wie sie diese digitalen Herausforderungen zu Hause meistert, ist eine ganz andere Geschichte.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787052615/Kristin/Macbook_rkqas5.jpg',
            ],
            [
                'id' => 'it-hacking',
                'title' => 'Home-Support',
                'text' => 'Wir kennen uns jetzt schon ein ganzes Jahr – aber weiß Kristin eigentlich, was ihr Freund tagtäglich am Rechner treibt? Oder wie diese "super" Geburtstags-Journey entstanden ist? Man munkelt ja fast, dass an ihr ein kleines Coding-Genie verloren gegangen ist.',
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
                ['city' => 'Minden', 'code' => 'MI', 'hint' => 'Deine Heimat'],
                ['city' => 'Lübbecke', 'code' => 'LK', 'hint' => 'Direkt nebenan'],
                ['city' => 'Köln', 'code' => 'K', 'hint' => 'Unser gemeinsames Zuhause'],
                ['city' => 'Hamburg', 'code' => 'HH', 'hint' => 'Moin Moin am Hafen'],
                ['city' => 'Villingen-Schwenningen', 'code' => 'VS', 'hint' => 'Schwarzwald'],
            ],
        ];
    }
}