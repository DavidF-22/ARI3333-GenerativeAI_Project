<?php
// instanciate twig environment
require_once __DIR__ . '/bootstap.php';

// check if file exists
echo $twig->render('index.html');
?>