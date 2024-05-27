<?php
include 'session_check.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnBoost</title>
    <link rel="icon" type="image/x-icon" href="assets/logo.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="menu-box" id="menu-box">
        <div class="content-menu">
            <div class="logo-menu">
                <img src="assets/logo.png">
                <p>LearnBoost</p>
            </div>
            <div class="list-menu">
                <div class="selected-menu">
                    <img src="assets/home-logo.png">
                    <h3>Dashboard</h3>
                </div>
                <div class="menu">
                    <a href="kelas.html">
                        <img src="assets/ic_outline-class.png">
                        <h3>Kelas</h3>
                    </a>
                </div>
                <div class="menu">
                    <a href="latihan-soal.html">
                        <img src="assets/barbel-logo.png">
                        <h3>Latihan Soal</h3>
                    </a>
                </div>
                <div class="menu">
                    <a href="poin.html">
                        <img src="assets/gravity-ui_graduation-cap.png">
                        <h3>Poin</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="profile-box">
            <div class="profile-container">
                <h2>Frans Andreas</h2>
                <p>Students</p>
            </div>
            <img src="assets/profile-holoen.jpg">
        </div>
        <div class="upper-content">
            <h1>Dashboard</h1>
        </div>
    </div>
    <script src="javascript.js"></script>
</body>
</html>