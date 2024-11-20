<?php
// instanciate twig environment
require_once __DIR__ . '/bootstrap.php';

// check if file exists
echo $twig->render('behindTheScenes.html');
?>