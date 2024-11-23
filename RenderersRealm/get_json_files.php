<?php
header('Content-Type: application/json');

// Path to the JSON folder
$jsonDir = './assets/json';

if (!is_dir($jsonDir)) {
    echo json_encode(["error" => "Invalid directory path"]);
    exit;
}

$result = [];

// Scan the directory for subdirectories and files
$subDirs = array_filter(glob($jsonDir . '/*'), 'is_dir');

foreach ($subDirs as $subDir) {
    $date = basename($subDir); // Subdirectory name as the date
    $files = array_filter(scandir($subDir), function ($file) use ($subDir) {
        return is_file($subDir . '/' . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'json';
    });
    $result[$date] = array_values($files); // Add files under the respective date
}

echo json_encode($result);
?>