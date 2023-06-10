<?php
require_once "../controllers/MessageController.php";

// Create an instance of the MessageModel
$messageModel = new MessageModel($link);

// Create an instance of the MessageController
$messageController = new MessageController($messageModel);

// Handle the incoming request
$messageController->handleRequest();
?>