<?php
// instanciate twig environment
require_once __DIR__ . '/bootstrap.php';

// get the error code
$error = $_SERVER['REDIRECT_STATUS'] ?? 403; // Default to 403 if REDIRECT_STATUS is not set;
$error_title = '';
$error_message = '';

// filter and set the error title and message
if ($error == 404) {
    $error_title = '404 Page Not Found';
    $error_message = 'The page you are looking for does not exist.';
} elseif ($error == 403) {
    $error_title = '403 Forbidden';
    $error_message = 'You do not have permission to access this page.';
} elseif ($error == 500) {
    $error_title = '500 Internal Server Error';
    $error_message = 'The server encountered an internal error or misconfiguration and was unable to complete your request.';
} elseif ($error == 503) {
    $error_title = '503 Service Unavailable';
    $error_message = 'The server is temporarily unable to service your request due to maintenance downtime or capacity problems.';
} else {
    $error_title = 'Error';
    $error_message = 'An error has occurred.';
}

// render the template
echo $twig->render('error.html', ['error_title' => $error_title, 'error_message' => $error_message]);
?>