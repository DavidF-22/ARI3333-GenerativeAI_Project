<?php
header('Content-Type: application/json');

// Get the POST data
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

// Extract the date, file name, user input, and AI image URL
$date = $data['date'] ?? null;
$fileName = $data['fileName'] ?? 'default.json'; // Default file name
$userInput = $data['userInput'] ?? null;
$aiImageUrl = $data['aiImageUrl'] ?? null;

if (!$date || !$fileName || !$userInput || !$aiImageUrl) {
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

// Prepare the data to save
$newEntry = [
    'userInput' => $userInput,
    'aiImageUrl' => $aiImageUrl,
    'timestamp' => date('Y-m-d H:i:s'),
];

// Read existing data if the JSON file exists
if (file_exists($jsonFile)) {
    $existingData = json_decode(file_get_contents($jsonFile), true) ?? [];
} else {
    $existingData = [];
}

// Append the new entry and save the file
$existingData[] = $newEntry;
file_put_contents($jsonFile, json_encode($existingData, JSON_PRETTY_PRINT));

// Respond with success
echo json_encode(['success' => true, 'data' => $newEntry]);
?>