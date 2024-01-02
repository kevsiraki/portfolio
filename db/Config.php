<?php
/**
 * Config Class
 *
 * This class handles configuration settings, including loading environment variables
 * and initializing a database connection. It follows the singleton pattern to ensure
 * a single instance of the configuration throughout the application.
 */
class Config
{
    /** @var Config|null $instance The singleton instance of the Config class. */
    private static $instance;

    /** @var mysqli|null $dbConnection The database connection object. */
    private $dbConnection;

    /**
     * Config constructor.
     *
     * Loads environment variables and initializes the database connection.
     * It follows the singleton pattern to ensure a single instance.
     */
    public function __construct()
    {
        $this->loadEnv();
        $this->initializeDatabaseConnection();
    }

    /**
     * Get the singleton instance of the Config class.
     *
     * @return Config The singleton instance.
     */
    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Initialize the database connection.
     *
     * @throws Exception If a database connection error occurs.
     */
    private function initializeDatabaseConnection()
    {
        try {
            $this->dbConnection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

            // Check for database connection errors
            if ($this->dbConnection->connect_errno) {
                throw new Exception("Could not connect to the database: " . $this->dbConnection->connect_error);
            }
        } catch (Exception $e) {
            die("ERROR: " . $e->getMessage());
        }
    }

    /**
     * Get the database connection object.
     *
     * @return mysqli|null The database connection object.
     */
    public function getDatabaseConnection()
    {
        return $this->dbConnection;
    }

    /**
     * Load environment variables from the .env file.
     */
    private function loadEnv()
    {
        $envFilePath = '../.env';
        if (file_exists($envFilePath)) {
            $envVariables = $this->parseEnvFile($envFilePath);

            // Set environment variables as constants or variables
            define('DB_HOST', $envVariables['DB_HOST']);
            define('DB_USERNAME', $envVariables['DB_USERNAME']);
            define('DB_PASSWORD', $envVariables['DB_PASSWORD']);
            define('DB_NAME', $envVariables['DB_NAME']);
        }
    }

    /**
     * Parse the contents of the .env file.
     *
     * @param string $filePath The path to the .env file.
     * @return array The parsed environment variables.
     */
    private function parseEnvFile($filePath)
    {
        $envVariables = [];

        $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            // Skip lines starting with '#' (comments) or empty lines
            if (empty($line) || strpos(trim($line), '#') === 0) {
                continue;
            }

            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);

            // Remove surrounding quotes from the value if present
            if (in_array($value[0], ['"', "'"]) && $value[0] === substr($value, -1)) {
                $value = substr($value, 1, -1);
            }

            $envVariables[$key] = $value;
        }
        return $envVariables;
    }
}
?>
