<?php

namespace App\EventSubscriber;

use Rompetomp\InertiaBundle\Service\InertiaInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;

class InertiaSubscriber implements EventSubscriberInterface
{
    /** @var InertiaInterface */
    protected $inertia;

    /**
     * AppSubscriber constructor.
     *
     * @param InertiaInterface $inertia
     */
    public function __construct(InertiaInterface $inertia)
    {
        $this->inertia = $inertia;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::CONTROLLER => 'onControllerEvent',
        ];
    }

    public function onControllerEvent($event)
    {
        $this->inertia->share(
            'Auth::user',
            [
                'name' => 'Arnaldo', // test
                'posts' => function () {
                    return [1 => 'Post'];
                }
            ]
        );
    }
}