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

if(!$_SESSION['username']){
    header('Location: ');
}


if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $source = $_POST['source'];

    $stmt = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows == 1){
        $_SESSION['username'] = $username;
        header("Location: homepage.php");
        exit();
    } else{
        header("Location: $source?error=Wrong+username/password!");
        exit();
    }

    $stmt->close();
}
$conn->close();