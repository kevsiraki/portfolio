<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

// Check if it's a preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit();
}

require_once "../controllers/MessageController.php";
require_once "../db/Config.php";
require_once "../models/MessageModel.php";

$config = new Config();

// Create an instance of the MessageModel
$messageModel = new MessageModel($config);

// Create an instance of the MessageController
$messageController = new MessageController($messageModel);

// Handle the incoming request
$messageController->handleRequest();