<?php
session_start();
$hostname = "localhost";
$username = "root";
$password = "";
$db = "learnboost";

$error = "";

$conn = mysqli_connect($hostname, $username, $password, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM user WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);

    if($result->num_rows == 1){
        header("Location: homepage.html");
        exit();
    } else{
        header("Location: login.html?error=Wrong+username/password!");
        exit();
    }
}