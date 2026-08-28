<?php

namespace App\Service;

class SlideProvider
{
    public function getSlides(): array
    {
        return [
            [
                'id' => 'intro-welcome',
                'title' => 'Happy Birthday Kristin',
                'text' => 'Die ist ein kleines Side-Project von Wolf, einem Developer-Nerd, der das Glück hatte Kristin in ihrem bislang aktuellstem (und hoffentlich auch einem der besten) Lebensjahr kennen lernen zu dürfen. Und der es irgendwie geschafft hat, diesen äußerst liebenswerten Menschen von sich zu begeistern. Und heute startet ein weiteres Kristin Lebensjahr. Da ist Wolf natürlich schon gespannt was er in diesem wohl alles neues über sie erfahren wird. Aber vorab schaut er einmal zurück, was er im letzten so alles über sie erfahren hat. ',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787060926/Kristin/Intro_yxdrnc.jpg',
            ],
            [
                'id' => 'intro-role',
                'title' => 'Kurzer Sicherheitscheck',
                'text' => 'Als echter DevOp hat Wolf sich natürlich auch um Einlasskontrollen gekümmert. Es soll ja nicht jeder Kristins dunkelste Geheimnis erfahren dürfen. Also:',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787062775/Kristin/intro_3_jn0yu5.jpg',
            ],
            [
                'id' => 'neptunbad-aussen',
                'title' => 'Das Neptunbad',
                'text' => 'Eine der allerersten Lektionen, die Wolf über Kristin lernen durfte: Entspannung darf nicht zu kurz kommen. Auch wenn die Urban-Sports Mitgliedschaft natürlich primär fürs Reformer-Pilatis abgeschlossen wurde. Das eigentliche Highlight sind günstigen Besuche im Neptunbad',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787051133/Kristin/Neptunbad_ebnqks.jpg',
            ],
            [
                'id' => 'neptunbad-sauna',
                'title' => 'Der perfekte Abend',
                'text' => 'Aber wer mit Kristin in die Sauna geht, lernt schnell: Es gibt feste Abläufe und ein perfektes Timing für die Reihenfolge in der die Aufgüsse besucht werden! Dabei ist besonders ein Aufguss ein Muss-Besuch. Der „Funkazan“-Aufguss ist der heißeste und intensivste Aufguss im Neptunbad und findet bei einer Raumtemperatur von rund 90 Grad Celsius statt',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787051137/Kristin/Neptunbad_Sauna_wgau40.jpg',
            ],
            [
                'id' => 'autobahn-fahrt',
                'title' => 'Unterwegs auf der A1',
                'text' => 'Entspannt aus dem Fenster schauen auf langen Autofahrten? Fehlanzeige! Wenn Kristin und ihre Freundin Anika unterwegs sind, verwandelt sich die Autobahn in eine hochengagierte Sammeljagd nach Kennzeichen. Als gelegentlicher Beifahrer wurde Wolf natürlich sofort rekrutiert und durfte schon so einige Kennzeichen notieren',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787055494/Kristin/Autobahn_kfmrc3.jpg',
            ],
            [
                'id' => 'kennzeichen-game',
                'title' => 'Die Kennzeichen-Jägerin',
                'text' => 'Dabei wurden Kennzeichen aus den verschiedensten Teilen Deutschlands gesichtet. Da stellt sich natürlich die Frage ob Kristin nur die reinen Kennzeichen gesammelt hat oder auch das Wissen wo diese überhaupt verortet sind.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787055500/Kristin/Nummernschild_ihdx5u.jpg',
            ],
            [
                'id' => 'rio-intro',
                'title' => 'Urlaub in Rio de Janeiro',
                'text' => 'Rio de Janeiro – Sonne, Ipanema-Beach und... hier und da ein wenig Warten auf das Essen im Restaurant. Normalerweise ist Kristin für ihre zarte Ungeduld bekannt. In allen Lebenslagen. Doch im Urlaub hat sie eine ziemlich smarte Lösung für Wartezeiten parat: bisschen Zocken!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787057295/Kristin/Rio_lcjmzo.jpg',
            ],
            [
                'id' => 'rio-kniffel',
                'title' => 'Die Kniffel-Challenge',
                'text' => 'Während also in der Küche geschuftet wird, verwandelte sie den Esstisch kurzerhand in wahlweise ein Toto oder Kniffel-Eldorado. Wolf, selbst bekennender weise einer der schlechteste Verlierer der Welt, hatte ordentlich gegen ihr Würfelgeschick zu kämpfen...',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787057354/Kristin/Kniffel_p1n3mf.jpg',
            ],
            [
                'id' => 'taylor-kardashian-intro',
                'title' => 'The Era of Keeping Up with Kristin',
                'text' => 'Ob die neusten Easter Eggs im Taylor-Swift-Universum oder der wöchentliche Drama-Report direkt aus Calabasas von den Kardashians – Krisin weiß wie man aus Insta die wichtigsten Infos für den Tag zusammenbekommt. Aber auch über die neusten Entwicklungen über den Effzeh, weiß sie meist erstaunlich gut Bescheid',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787354728/Kristin/Instagram_xjbzle.jpg',
            ],
            [
                'id' => 'taylor-kardashian-game',
                'title' => 'The Ultimate Pop-Culture Quiz',
                'text' => 'Wolf hat zwar versucht zu lernen und ein ähnlich professionelles Niveau zu erreichen, aber hier muss er passen:',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787354722/Kristin/Magazine_xseecf.jpg',
            ],
            [
                'id' => 'food-intro',
                'title' => 'Königlicher Spargel & Die Hollandaise-Frage',
                'text' => 'Auch gutes Essen kommt in Kristins Leben nicht zu kurz. Es soll ja hemmungslose Soßenfanatiker geben, die alles ertränken, bis der Tellerboden nicht mehr sichtbar ist. Aber wenn Kristin kocht – ob knusprige Bagels, buntes Ofengemüse oder ihre legendäre Pilzrahmsoße –, ist jeder hin und weg. Auch ohne extra Soße.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787397263/Kristin/Spargel_tp0fep.jpg',
            ],
            [
                'id' => 'food-game',
                'title' => 'Das Hollandaise-Gießen',
                'text' => 'Für alle anderen Essen gilt: Es verdient die perfekte Dosis Liebe – oder eben Hollandaise! Halte den Button gedrückt und gieße genau die richtige Menge Soße über den Spargel.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787397448/Kristin/Saucen_kzhqfn.jpg',
            ],
            [
                'id' => 'taste-tinder-intro',
                'title' => 'Suche im Netz',
                'text' => 'Kristin schwärmt für Romcoms und Romance-Bücher über charmante Eishockeyspieler. Kitschig ist sie trotzdem keineswegs – schließlich hat sie Wolf die Chance gegeben, sie auf dem unromantischsten Weg überhaupt kennenzulernen: über das Internet! Wie viele Jungs sie wohl vor ihm nach links gewischt hat?',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787414511/Kristin/Paerchen_fzrop4.jpg',
            ],
            [
                'id' => 'taste-tinder',
                'title' => 'Taste Match',
                'text' => 'Zeit für das ultimative Swipe-Match! Wische nach rechts für Top und nach links für Flop – kennst du Kristins Lieblings-Snacks und Vorlieben?',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787414606/Kristin/Tinder_cyag4f.jpg',
            ],
            [
                'id' => 'macbook-uniklinik',
                'title' => 'MacBook in der Uniklinik',
                'text' => 'In der Uniklinik herrscht bekanntlich strenge Windows-Diktatur. Doch Kristin ist mit ihrem MacBook als mutige IT-Rebellin unterwegs. Jedes Mal, wenn sie beim Support anruft, heißt es stoßseufzend: "Mac? Da können wir nicht helfen!" Aber Kristin beißt sich durch – Technikaffinität hat sie definitiv im Blut.',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787052615/Kristin/Macbook_rkqas5.jpg',
            ],
            [
                'id' => 'it-hacking',
                'title' => 'Home-Support',
                'text' => 'Ein ganzes Jahr kennt Wolf sie jetzt schon – aber weiß Kristin eigentlich, was dieser komische Kerl da stundenlang im dunklen Kämmerlein am Terminal tippt? Oder wie diese Geburtstags-Journey hier gebaut wurde? Für die ehemalige PC-Schrauberin sollte so ne kleine Coding-Challenge doch kein Problem sein!',
                'image' => 'https://res.cloudinary.com/dl4y4cfvs/image/upload/v1787052618/Kristin/Hacking_ugsuue.jpg',
            ],
        ];
    }

    public function getSaunaQuestion(): array
    {
        return [
            'question' => 'Aber wann besucht man ihn am besten?',
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
                ['city' => 'Minden', 'code' => 'MI', 'hint' => 'Nabel der Welt'],
                ['city' => 'Lübbecke', 'code' => 'LK', 'hint' => 'Kristins Heimat'],
                ['city' => 'Köln', 'code' => 'K', 'hint' => 'Heimat vun dä Dom, em Effzeh, eehrfelder Jungs un em lecker Mädche'],
                ['city' => 'Hamburg', 'code' => 'HH', 'hint' => 'Hier soll dieser Loris wohnen?!'],
                ['city' => 'Düsseldorf', 'code' => 'D', 'hint' => 'Die eigentlich verbotene Stadt'],
                ['city' => 'Monschau', 'code' => 'MON', 'hint' => 'Ziel von Rentnern aus aller Welt'],
                ['city' => 'Villingen-Schwenningen', 'code' => 'VS', 'hint' => 'Schwarzwald. Kennt man doch...'],
            ],
        ];
    }
}