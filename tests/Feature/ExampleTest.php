<?php

use Inertia\Testing\AssertableInertia as Assert;

it('renders the landing page', function () {
    $response = $this->get(route('home'));

    $response->assertSuccessful();
    $response->assertInertia(fn (Assert $page) => $page->component('welcome'));
});
