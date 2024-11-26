<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class QuizType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $choices = array_flip($options['answers']);
        $defaultChoice = count($choices) > 0 ? array_key_first($choices) : null;

        $builder
            ->add('question', null, [
                'label' => false,
            ])
            ->add('answer', ChoiceType::class, [
                'label' => false,
                'choices' => array_flip($options['answers']),
                'expanded' => false,
                'multiple' => false,
                'data' => $defaultChoice,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuizData::class,
            'answers' => [], // Provide a default empty array for answers
        ]);
    }
}