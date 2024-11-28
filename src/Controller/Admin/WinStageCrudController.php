<?php

namespace App\Controller\Admin;

use App\Entity\WinStage;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class WinStageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return WinStage::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IntegerField::new('pointBorder')->setLabel('Point Border'),
            TextField::new('pointText')->setLabel('Point Text'),
            TextField::new('winText')->setLabel('Win Text'),
        ];
    }
}