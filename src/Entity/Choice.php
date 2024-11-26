<?php

namespace App\Entity;

use App\Repository\ChoiceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChoiceRepository::class)]
class Choice
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 1000)]
    private ?string $content = null;

    #[ORM\Column(length: 1000)]
    private ?string $response = null;

    #[ORM\ManyToOne(inversedBy: 'choices')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Question $question = null;

    #[ORM\Column(nullable: false)]
    private bool $isCorrect = false;

    #[ORM\Column(length: 1000)]
    private ?string $textCorrect = null;

    #[ORM\Column(length: 1000)]
    private ?string $textIncorrect = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getResponse(): ?string
    {
        return $this->response;
    }

    public function setResponse(string $response): static
    {
        $this->response = $response;

        return $this;
    }

    public function getQuestion(): ?Question
    {
        return $this->question;
    }

    public function setQuestion(?Question $question): static
    {
        $this->question = $question;

        return $this;
    }

    public function isCorrect(): bool
    {
        return $this->isCorrect;
    }

    public function setCorrect(bool $isCorrect): static
    {
        $this->isCorrect = $isCorrect;

        return $this;
    }

    public function getTextCorrect(): ?string
    {
        return $this->textCorrect;
    }

    public function setTextCorrect(string $textCorrect): static
    {
        $this->textCorrect = $textCorrect;

        return $this;
    }

    public function getTextIncorrect(): ?string
    {
        return $this->textIncorrect;
    }

    public function setTextIncorrect(string $textIncorrect): static
    {
        $this->textIncorrect = $textIncorrect;

        return $this;
    }
}
