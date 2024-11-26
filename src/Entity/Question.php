<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 1000)]
    private ?string $content = null;

    /**
     * @var Collection<int, Choice>
     */
    #[ORM\OneToMany(targetEntity: Choice::class, mappedBy: 'question', orphanRemoval: true)]
    private Collection $choices;

    #[ORM\Column]
    private ?int $doorNumber = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $opened = null;

    #[ORM\Column(nullable: true)]
    private ?int $triggeredChoice = null;

    #[ORM\Column(length: 1000, nullable: true)]
    private ?string $imageUrl = null;

    public function __construct()
    {
        $this->choices = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Choice>
     */
    public function getChoices(): Collection
    {
        return $this->choices;
    }

    public function addChoice(Choice $choice): static
    {
        if (!$this->choices->contains($choice)) {
            $this->choices->add($choice);
            $choice->setQuestion($this);
        }

        return $this;
    }

    public function removeChoice(Choice $choice): static
    {
        if ($this->choices->removeElement($choice)) {
            // set the owning side to null (unless already changed)
            if ($choice->getQuestion() === $this) {
                $choice->setQuestion(null);
            }
        }

        return $this;
    }

    public function getDoorNumber(): ?int
    {
        return $this->doorNumber;
    }

    public function setDoorNumber(int $doorNumber): static
    {
        $this->doorNumber = $doorNumber;

        return $this;
    }

    public function getOpened(): ?\DateTimeInterface
    {
        return $this->opened;
    }

    public function setOpened(?\DateTimeInterface $opened): static
    {
        $this->opened = $opened;

        return $this;
    }

    public function getTriggeredChoice(): ?int
    {
        return $this->triggeredChoice;
    }

    public function setTriggeredChoice(?int $triggeredChoice): static
    {
        $this->triggeredChoice = $triggeredChoice;

        return $this;
    }

    public function getImageUrl(): ?string
    {
        return $this->imageUrl;
    }

    public function setImageUrl(?string $imageUrl): static
    {
        $this->imageUrl = $imageUrl;

        return $this;
    }
}
