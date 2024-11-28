<?php

namespace App\Entity;

use App\Repository\WinStageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WinStageRepository::class)]
class WinStage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $pointBorder = null;

    #[ORM\Column(length: 255)]
    private ?string $pointText = null;

    #[ORM\Column(length: 255)]
    private ?string $winText = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPointBorder(): ?int
    {
        return $this->pointBorder;
    }

    public function setPointBorder(int $pointBorder): static
    {
        $this->pointBorder = $pointBorder;

        return $this;
    }

    public function getPointText(): ?string
    {
        return $this->pointText;
    }

    public function setPointText(string $pointText): static
    {
        $this->pointText = $pointText;

        return $this;
    }

    public function getWinText(): ?string
    {
        return $this->winText;
    }

    public function setWinText(string $winText): static
    {
        $this->winText = $winText;

        return $this;
    }
}
