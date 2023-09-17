<?php
require_once "../db/config.php";
require_once "../models/MessageModel.php";

class MessageController
{
    private $model;

    /**
     * MessageController constructor.
     *
     * @param MessageModel $model The message model.
     */
    public function __construct(MessageModel $model)
    {
        $this->model = $model;
    }

    /**
     * Handle the incoming request.
     *
     * @return void
     */
    public function handleRequest()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With");

        $response = [];
        $data = json_decode(file_get_contents("php://input"));

        try {
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                throw new Exception("Invalid request method. Only POST method is allowed.");
            }
			
			// Check for invalid message spam.
			$ip = $_SERVER['REMOTE_ADDR'];
			$lastRequestTime = $this->model->getLastRequestTime($ip);
	
			if ($lastRequestTime !== null) {
				$timeDiff = time() - $lastRequestTime;
				if ($timeDiff < 3) {
					// Less than 3 seconds since the last request, rate limit exceeded
					throw new Exception("Try Again");
				}
			}
			
			$this->model->updateLastRequestTime($ip, time());
			
            if ($this->model->isValidMessageData($data)) {
                $sanitizedData = $this->model->sanitizeMessageData($data);

                // Check for valid message spam.
                $count = $this->model->getSpamCount();
                if ($count >= 10) {
                    http_response_code(403);
                    $response = [
                        "status" => "error",
                        "message" => "Too Many Messages",
                    ];
                } else {
                    // If less than 10 messages sent from IP, save their message.
                    $messageId = $this->model->saveMessage($sanitizedData->name, $sanitizedData->email, $sanitizedData->message);
                    http_response_code(201);
                    $response = [
                        "status" => "success",
                        "message" => "Message Sent Successfully",
                        "message_id" => $messageId,
                    ];
                }
            } else {
                http_response_code(400);
                throw new Exception("Not Sent");
            }

            echo json_encode($response);
            exit();

        } catch (Exception $e) {
            http_response_code(400);
            $response = [
                "status" => "error",
                "message" => $e->getMessage(),
            ];
            echo json_encode($response);
            exit();
        }
    }
}
?>