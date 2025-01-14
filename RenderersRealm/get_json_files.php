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
    
    // Get all JSON files in the subdirectory
    $files = array_filter(scandir($subDir), function ($file) use ($subDir) {
        return is_file($subDir . '/' . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'json';
    });

    // Sort files by modification time in descending order
    usort($files, function ($a, $b) use ($subDir) {
        return filemtime($subDir . '/' . $b) - filemtime($subDir . '/' . $a);
    });

    $result[$date] = array_values($files); // Add sorted files under the respective date
}

echo json_encode($result);
?>