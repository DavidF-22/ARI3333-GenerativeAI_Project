<?php
header('Content-Type: application/json');

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

// Extract the date, file name, and the full JSON data array (from JavaScript)
$date = $data['date'] ?? null;
$fileName = $data['fileName'] ?? 'default.json'; // Default file name
$jsonData = $data['data'] ?? null; // The full array of JSON data from JavaScript

if (!$date || !$fileName || !$jsonData) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing data']);
    exit;
}

// Define the directory and file paths
$baseDir = __DIR__ . '/assets/json';
$dateDir = $baseDir . '/' . $date;
$jsonFile = $dateDir . '/' . $fileName;

// Create the directory if it doesn't exist
if (!file_exists($dateDir)) {
    mkdir($dateDir, 0777, true);
}

// Save the data array to the file
if (file_put_contents($jsonFile, json_encode($jsonData, JSON_PRETTY_PRINT))) {
    http_response_code(200);
    echo json_encode(['success' => true, 'file' => $jsonFile]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save the file']);
}
?>