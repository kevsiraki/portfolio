<?php

/**
 * Config Class
 *
 * This class handles configuration settings, including loading environment
 * variables and initializing a database connection. It follows the singleton
 * pattern to ensure a single configuration instance throughout the application.
 */
class Config
{
    /** @var Config|null The singleton Config instance. */
    private static $instance;

    /** @var mysqli|null The database connection object. */
    private $dbConnection;

    /**
     * Config constructor.
     *
     * Loads environment variables and initializes the database connection.
     */
    public function __construct()
    {
        $this->loadEnv();
        $this->initializeDatabaseConnection();
    }

    /**
     * Get the singleton Config instance.
     *
     * @return Config
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
     * 2026-07-19:
     * Changed error handling so database details are written to the server log
     * instead of being displayed to visitors.
     *
     * @return void
     */
    private function initializeDatabaseConnection()
    {
        try {
            $this->dbConnection = new mysqli(
                DB_HOST,
                DB_USERNAME,
                DB_PASSWORD,
                DB_NAME
            );

            if ($this->dbConnection->connect_errno) {
                throw new RuntimeException(
                    'Could not connect to the database: '
                    . $this->dbConnection->connect_error
                );
            }

            $this->dbConnection->set_charset('utf8mb4');
        } catch (Throwable $e) {
            error_log('Database connection error: ' . $e->getMessage());

            http_response_code(500);
            exit('Internal server error');
        }

        /*
         * Original code, replaced on 2026-07-19 because it exposed database
         * connection details directly to visitors:
         *
         * try {
         *     $this->dbConnection = new mysqli(
         *         DB_HOST,
         *         DB_USERNAME,
         *         DB_PASSWORD,
         *         DB_NAME
         *     );
         *
         *     if ($this->dbConnection->connect_errno) {
         *         throw new Exception(
         *             "Could not connect to the database: "
         *             . $this->dbConnection->connect_error
         *         );
         *     }
         * } catch (Exception $e) {
         *     die("ERROR: " . $e->getMessage());
         * }
         */
    }

    /**
     * Get the database connection object.
     *
     * @return mysqli|null
     */
    public function getDatabaseConnection()
    {
        return $this->dbConnection;
    }

    /**
     * Load environment variables from the protected .env file.
     *
     * 2026-07-19:
     * Migrated the environment file from:
     *
     *     /var/www/www.kevinsiraki.com/.env
     *
     * to:
     *
     *     /etc/kevinsiraki/.env
     *
     * This keeps database credentials outside the web document tree.
     *
     * @return void
     */
    private function loadEnv()
    {
        /*
         * Original path, commented out on 2026-07-19:
         *
         * $envFilePath = __DIR__ . '/../.env';
         */

        $envFilePath = '/etc/kevinsiraki/.env';

        if (!is_readable($envFilePath)) {
            error_log(
                'Configuration error: environment file is missing or unreadable: '
                . $envFilePath
            );

            http_response_code(500);
            exit('Internal server error');
        }

        $envVariables = $this->parseEnvFile($envFilePath);

        $requiredVariables = [
            'DB_HOST',
            'DB_USERNAME',
            'DB_PASSWORD',
            'DB_NAME',
        ];

        foreach ($requiredVariables as $variableName) {
            if (
                !array_key_exists($variableName, $envVariables)
                || $envVariables[$variableName] === ''
            ) {
                error_log(
                    'Configuration error: required environment variable is missing: '
                    . $variableName
                );

                http_response_code(500);
                exit('Internal server error');
            }
        }

        $this->defineConstant('DB_HOST', $envVariables['DB_HOST']);
        $this->defineConstant('DB_USERNAME', $envVariables['DB_USERNAME']);
        $this->defineConstant('DB_PASSWORD', $envVariables['DB_PASSWORD']);
        $this->defineConstant('DB_NAME', $envVariables['DB_NAME']);

        /*
         * Original loading logic, replaced on 2026-07-19 because it did not
         * handle missing files, unreadable files, or missing variables:
         *
         * if (file_exists($envFilePath)) {
         *     $envVariables = $this->parseEnvFile($envFilePath);
         *
         *     define('DB_HOST', $envVariables['DB_HOST']);
         *     define('DB_USERNAME', $envVariables['DB_USERNAME']);
         *     define('DB_PASSWORD', $envVariables['DB_PASSWORD']);
         *     define('DB_NAME', $envVariables['DB_NAME']);
         * }
         */
    }

    /**
     * Define a constant only when it has not already been defined.
     *
     * 2026-07-19:
     * Added to avoid warnings if this class is loaded more than once.
     *
     * @param string $name
     * @param string $value
     * @return void
     */
    private function defineConstant($name, $value)
    {
        if (!defined($name)) {
            define($name, $value);
        }
    }

    /**
     * Parse the contents of an environment file.
     *
     * 2026-07-19:
     * Added validation for malformed lines, empty keys, empty values, and
     * quoted values.
     *
     * @param string $filePath
     * @return array
     */
    private function parseEnvFile($filePath)
    {
        $envVariables = [];

        $lines = file(
            $filePath,
            FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES
        );

        if ($lines === false) {
            throw new RuntimeException(
                'Unable to read environment file: ' . $filePath
            );
        }

        foreach ($lines as $lineNumber => $line) {
            $line = trim($line);

            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }

            if (!str_contains($line, '=')) {
                error_log(
                    sprintf(
                        'Ignoring malformed environment line %d in %s.',
                        $lineNumber + 1,
                        $filePath
                    )
                );

                continue;
            }

            [$key, $value] = explode('=', $line, 2);

            $key = trim($key);
            $value = trim($value);

            if ($key === '') {
                error_log(
                    sprintf(
                        'Ignoring environment line %d with an empty key in %s.',
                        $lineNumber + 1,
                        $filePath
                    )
                );

                continue;
            }

            if ($value !== '') {
                $firstCharacter = $value[0];
                $lastCharacter = substr($value, -1);

                if (
                    ($firstCharacter === '"' || $firstCharacter === "'")
                    && $firstCharacter === $lastCharacter
                ) {
                    $value = substr($value, 1, -1);
                }
            }

            $envVariables[$key] = $value;
        }

        /*
         * Original parser, replaced on 2026-07-19:
         *
         * $envVariables = [];
         *
         * $lines = file(
         *     $filePath,
         *     FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES
         * );
         *
         * foreach ($lines as $line) {
         *     if (empty($line) || strpos(trim($line), '#') === 0) {
         *         continue;
         *     }
         *
         *     list($key, $value) = explode('=', $line, 2);
         *     $key = trim($key);
         *     $value = trim($value);
         *
         *     if (
         *         in_array($value[0], ['"', "'"])
         *         && $value[0] === substr($value, -1)
         *     ) {
         *         $value = substr($value, 1, -1);
         *     }
         *
         *     $envVariables[$key] = $value;
         * }
         */

        return $envVariables;
    }
}