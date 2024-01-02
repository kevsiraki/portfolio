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
     * @param mixed $Config The database connection object.
     */
    public function __construct(Config $config)
    {
        $this->link = $config->getDatabaseConnection();
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
        $stmt = $this->link->prepare($sql);
        $stmt->bind_param("s", $_SERVER["REMOTE_ADDR"]);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
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
            return $stmt->insert_id;
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
	
	/**
	 * Get the last request time from the database for the specified IP address.
	 *
	 * @param string $ip The IP address.
	 * @return int|null The last request time, or null if not found.
	 */
	public function getLastRequestTime($ip)
	{
		$sql = "SELECT last_request_time FROM rate_limit WHERE ip = ?";
		$stmt = $this->link->prepare($sql);
		$stmt->bind_param("s", $ip);
		$stmt->execute();
		$stmt->bind_result($lastRequestTime);
	
		if ($stmt->fetch()) {
			return $lastRequestTime;
		}
	
		return null;
	}
	
	/**
	* Update the last request time for the specified IP address in the database.
	*
	* @param string $ip The IP address.
	* @param int $currentTime The current time.
	* @return bool True if the update was successful, false otherwise.
	*/
	public function updateLastRequestTime($ip, $currentTime)
	{
		$existingTime = $this->getLastRequestTime($ip);
	
		if ($existingTime !== null) {
			// Update the existing record
			$sql = "UPDATE rate_limit SET last_request_time = ? WHERE ip = ?";
			$stmt = $this->link->prepare($sql);
			$stmt->bind_param("is", $currentTime, $ip);
			$success = $stmt->execute();
		} else {
			// Create a new record
			$sql = "INSERT INTO rate_limit (ip, last_request_time) VALUES (?, ?)";
			$stmt = $this->link->prepare($sql);
			$stmt->bind_param("si", $ip, $currentTime);
			$success = $stmt->execute();
		}
	
		$stmt->close();
		return $success;
	}
}
?>