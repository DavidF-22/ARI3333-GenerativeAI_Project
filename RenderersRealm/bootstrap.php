<?php
// load autoloader
require_once __DIR__ . '/vendor/autoload.php';

// specifiy twig templates path
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/templates');

// instanciate twig environment
$twig = new \Twig\Environment($loader);
?>