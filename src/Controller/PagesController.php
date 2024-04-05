<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractInertiaController
{
    #[Route('/', name: 'app_home', options: ['expose' => true], methods: ['GET'])]
    public function home(): Response
    {
        return $this->inertiaRender('Home', ['name' => 'John Doe']);
    }

    #[Route('/about-us', name: 'app_about', options: ['expose' => true], methods: ['GET'])]
    public function about(): Response
    {
        return $this->inertiaRender('About');
    }

    #[Route('/contact', name: 'app_contact', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function contact(Request $request): Response
    {
        $form = $this->createForm(ContactFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            flash()->addSuccess('Message sent successfully!');

            return $this->redirectToRoute('app_home');
        }

        return $this->inertiaRender('Contact');
    }
}