<?php

namespace App\Controller;

use App\EventSubscriber\CheckFormValidationStateSubscriber;
use Rompetomp\InertiaBundle\Service\InertiaInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Response;

abstract class AbstractInertiaController extends AbstractController
{
    /**
     * Creates and returns an unnamed form instance from the type of the form.
     */
    protected function createForm(string $type, $data = null, array $options = []): FormInterface
    {
        return $this->container->get('form.factory')
            ->createNamedBuilder('', $type, $data, $options)
            ->addEventSubscriber(
                $this->container->get(CheckFormValidationStateSubscriber::class)
            )
            ->getForm();
    }

    /**
     * Renders a component as a page.
     */
    protected function inertiaRender(string $component, array $props = [], array $viewData = [], array $context = []): Response
    {
        return $this->container->get(InertiaInterface::class)->render($component, $props, $viewData, $context);
    }

    public static function getSubscribedServices(): array
    {
        return array_merge(parent::getSubscribedServices(), [
            InertiaInterface::class,
            CheckFormValidationStateSubscriber::class,
        ]);
    }
}