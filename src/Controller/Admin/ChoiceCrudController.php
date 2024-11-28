<?php

namespace App\Controller\Admin;

use App\Entity\Choice;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;

class ChoiceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Choice::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('content')->setLabel('Content'),
            TextField::new('response')->setLabel('Response'),
            BooleanField::new('isCorrect')->setLabel('Is Correct'),
            UrlField::new('responseImageUrl')->setLabel('Response Image URL')->hideOnIndex(),
            AssociationField::new('question')
                ->setLabel('Question Door Number')
                ->formatValue(function ($value, $entity) {
                    return $entity->getQuestion() ? 'Door ' . $entity->getQuestion()->getDoorNumber() : '';
                }),
        ];
    }
}
