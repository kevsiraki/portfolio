<?php

/**
 * Load the .env file
 */
$envFilePath = '../.env';
if (file_exists($envFilePath)) {
    $envVariables = parseEnvFile($envFilePath);

    /**
     * Set environment variables as constants or variables
     */
    define('DB_HOST', $envVariables['DB_HOST']);
    define('DB_USERNAME', $envVariables['DB_USERNAME']);
    define('DB_PASSWORD', $envVariables['DB_PASSWORD']);
    define('DB_NAME', $envVariables['DB_NAME']);
}

$link = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if ($link->connect_errno) {
    die("ERROR: Could not connect. " . $link->connect_error);
}

function parseEnvFile($filePath)
{
    $envVariables = [];

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        /**
         * Skip lines starting with '#' (comments) or empty lines
         */
        if (empty($line) || strpos(trim($line), '#') === 0) {
            continue;
        }

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);

        /**
         * Remove surrounding quotes from the value if present
         */
        if (in_array($value[0], ['"', "'"]) && $value[0] === substr($value, -1)) {
            $value = substr($value, 1, -1);
        }

        $envVariables[$key] = $value;
    }
    return $envVariables;
}

?>
