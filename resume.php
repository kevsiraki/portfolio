<?php
require_once "db/Config.php";
require_once 'models/PageVisitModel.php';
require_once 'controllers/PageVisitController.php';
(new PageVisitController(new PageVisitModel(Config::getInstance())))->recordPageVisit();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
    <meta name="description"
        content="Highlighting the skills and expertise of Kevin Siraki, a software developer, IT specialist, and hardware expert. Find a comprehensive resume showcasing technical proficiency and problem-solving capabilities.">
    <meta name="keywords"
        content="Kevin Siraki, Web developer, IT specialist, hardware expert, resume, technical skills, problem-solving, programming, software development, network administration, hardware troubleshooting">
    <meta name="author" content="Kevin Siraki">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="Kevin Siraki - Software Developer, IT Specialist, Hardware Expert">
    <meta property="og:description"
        content="Highlighting the skills and expertise of Kevin Siraki, a web developer, IT specialist, and hardware expert. Find a comprehensive resume showcasing technical proficiency and problem-solving capabilities.">
    <meta property="og:url" content="https://www.kevinsiraki.com">
    <meta property="og:type" content="website">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Kevin Siraki Portfolio">
    <meta name="msapplication-TileColor" content="#f5f5f5">
    <meta name="theme-color" content="#f5f5f5">
    <title>Kevin Siraki - Software Developer, IT Specialist, Hardware Expert</title>
    <link rel="canonical" href="https://kevinsiraki.com">
    <!-- Icons -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <!-- Stylesheets and Fonts -->
    <link rel="preload" href="views/css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="views/css/font.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <!-- Scripts/JSONs -->
    <link rel="manifest" href="manifest.json">
    <script src="views/js/faicons.js" defer></script>
    <script src="app.js"></script>
</head>

<body>
    <header id="header"></header>
    <div class="wrapper">
        <div class="inner">
            <section id="Experience"></section>
            <section id="Education"></section>
            <section id="Skills"></section>
            <section id="Contact"></section>
        </div>
    </div>
    <footer id="footer"></footer>
    <!-- JS Components -->
    <script type="module" src="views/components/Header/header.component.js" async></script>
    <script type="module" src="views/components/Experience/experience.component.js" defer></script>
    <script type="module" src="views/components/Education/education.component.js" defer></script>
    <script type="module" src="views/components/Skills/skills.component.js" defer></script>
    <script type="module" src="views/components/Contact/contact.component.js" defer></script>
    <script type="module" src="views/components/Footer/footer.component.js" defer></script>
</body>

</html>