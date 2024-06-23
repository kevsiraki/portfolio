<?php
function displayHeader($pageTitle)
{
    // Check if quote of the day is already set and if it's older than 24 hours
    if (isset ($_COOKIE['quote']) && isset ($_COOKIE['author']) && isset ($_COOKIE['quote_timestamp']) && time() - $_COOKIE['quote_timestamp'] < 86400) {
        // Use the stored quote
        $quote = $_COOKIE['quote'];
        $author = $_COOKIE['author'];
    } else {
        // Database connection
        $servername = "localhost";
        $username = "kevinsiraki";
        $password = "M9qCVwztJBnuKfE";
        $database = "gusd"; // Assuming your database name is 'gusd'

        $conn = new mysqli($servername, $username, $password, $database);

        // Check connection
        if ($conn->connect_error) {
            die ("Connection failed: " . $conn->connect_error);
        }

        // Fetch quote of the day
        $sql = "SELECT quote, author FROM quotes ORDER BY RAND() LIMIT 1"; // Fetch a random quote
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $quote = $row["quote"];
            $author = $row["author"];

            // Store quote and timestamp in cookies
            setcookie('quote', $quote, time() + 86400); // Expires in 24 hours
            setcookie('author', $author, time() + 86400);
            setcookie('quote_timestamp', time(), time() + 86400);
        } else {
            $quote = "No quote available";
            $author = "Unknown author";
        }

        // Close connection
        $conn->close();
    }

    // Display header with quote of the day
    echo "
    <header>
        <h1>$pageTitle</h1>
        <div class ='quote-container'>
            <small class='quote'><i>\"$quote\"</i></small>
            <br>
            <sub class='author'>$author</sub>
            <br><br>
        </div>
        <input type='checkbox' id='menu-toggle'/>
        <label for='menu-toggle' class='menu-icon'></label>
        <nav>
            <a href='index.php'>Home</a>
            <a href='lessons.php'>Lesson Planning</a>
            <a href='networking.php'>Networking Basics</a>
            <a href='chromebooks.php'>Chromebooks</a>
            <a href='clever.php'>Clever Software</a>
            <a href='lenovo.php'>Lenovo/Windows</a>
            <a href='mac.php'>macOS</a>
            <a href='printers.php'>Printers</a>
            <a href='ipevo.php'>Document Cameras</a>
            <a href='display.php'>Displays, Multimedia</a>
            <a href='miscinfo.php'>More Info</a>
            <a href='contact.php'>Contact</a>
        </nav>
    </header>
    ";
}
?>

<script>
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('collapsed');
        } else {
            header.classList.remove('collapsed');
        }
    });

</script>

<script>
    window.addEventListener('DOMContentLoaded', function () {
        var menuToggle = document.getElementById('menu-toggle');
        var body = document.querySelector('body');

        menuToggle.addEventListener('change', function () {
            if (this.checked) {
                body.classList.add('menu-open');
            } else {
                body.classList.remove('menu-open');
            }
        });
    });
</script>