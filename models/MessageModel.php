<?php
class MessageModel
{
    private $name;
    private $email;
    private $message;
    private $link;

    /**
     * MessageModel constructor.
     *
     * @param mixed $link The database connection link.
     */
    public function __construct($link)
    {
        $this->link = $link;
    }

    /**
     * Check if the message data is valid.
     *
     * @param mixed $data The data received from the request.
     * @return bool True if the message data is valid, false otherwise.
     */
    public function isValidMessageData($data)
    {
        $this->name = isset($data->name) ? $data->name : '';
        $this->email = isset($data->email) ? $data->email : '';
        $this->message = isset($data->message) ? $data->message : '';

        return !empty($this->name) && !empty($this->email) && $this->isValidEmail() && !empty($this->message);
    }

    /**
     * Sanitize and filter the message data.
     *
     * @param mixed $data The message data.
     * @return mixed The sanitized and filtered message data.
     */
    public function sanitizeMessageData($data)
    {
        $sanitizedData = new stdClass();
        $sanitizedData->name = $this->sanitizeAndFilterInput($data->name);
        $sanitizedData->email = $this->sanitizeAndFilterInput($data->email);
        $sanitizedData->message = $this->sanitizeAndFilterInput($data->message);

        return $sanitizedData;
    }

    /**
     * Get the count of spam messages from the same IP.
     *
     * @return int The count of spam messages from the same IP.
     */
    public function getSpamCount()
    {
        $sql = "SELECT COUNT(*) as countIP FROM messages WHERE ip = ? ;";
        $stmt = mysqli_prepare($this->link, $sql);
        mysqli_stmt_bind_param($stmt, "s", $_SERVER["REMOTE_ADDR"]);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $row = mysqli_fetch_array($result);
        return $row["countIP"];
    }

    /**
     * Save the message to the database.
     *
     * @param string $name The name.
     * @param string $email The email.
     * @param string $message The message.
     * @return int The ID of the saved message.
     * @throws Exception If there is an error while saving the message.
     */
    public function saveMessage($name, $email, $message)
    {
        $sql = "INSERT INTO messages (name, email, message, ip) VALUES (?, ?, ?, ?)";
        $stmt = $this->link->prepare($sql);
        $stmt->bind_param("ssss", $name, $email, $message, $_SERVER["REMOTE_ADDR"]);

        if ($stmt->execute()) {
            return mysqli_insert_id($this->link);
        } else {
            throw new Exception("Not Sent");
        }
    }

    /**
     * Check if the email address is valid.
     *
     * @return bool True if the email address is valid, false otherwise.
     */
    private function isValidEmail()
    {
        $sanitizedEmail = filter_var($this->email, FILTER_SANITIZE_EMAIL);
        return filter_var($sanitizedEmail, FILTER_VALIDATE_EMAIL) !== false;
    }

    /**
     * Sanitize and filter the input data.
     *
     * @param string $input The input string to sanitize and filter.
     * @return string The sanitized and filtered input string.
     */
    private function sanitizeAndFilterInput($input)
    {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
        $input = filter_var($input, FILTER_SANITIZE_STRING);
        $input = strip_tags($input);
        return $input;
    }
}
?>