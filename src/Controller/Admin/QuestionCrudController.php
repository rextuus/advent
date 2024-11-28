<?php

namespace App\Controller\Admin;

use App\Entity\Question;
use App\Form\ChoiceType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;

class QuestionCrudController extends AbstractCrudController
{


    public function __construct(private AdminUrlGenerator $adminUrlGenerator)
    {
    }

    public static function getEntityFqcn(): string
    {
        return Question::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('content')->setLabel('Content'),
            AssociationField::new('choices')->setLabel('Choices'),
            IntegerField::new('doorNumber')->setLabel('Door Number'),
            DateTimeField::new('opened')->setLabel('Opened'),
            IntegerField::new('triggeredChoice')->setLabel('Triggered Choice')->hideOnIndex(),
            UrlField::new('imageUrl')->setLabel('Image URL')->hideOnIndex(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle(Crud::PAGE_INDEX, 'Questions')
            ->setDefaultSort(['doorNumber' => 'ASC']);
    }
}