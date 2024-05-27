<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LearnBoost</title>
    <link rel="icon" type="image/x-icon" href="assets/logo.png">
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <script src="login.js"></script>
    <div class="raw-container">
        <div class="container">
            <div class="banner">
                <h1>LearnBoost</h1>
            </div>
            <div class="role">
                <h1>Teacher</h1>
            </div>
            <div class="content">
                <form name="loginForm" onsubmit="return validation()" action="login.php" method="post">
                    <input type="hidden" name="source" value="loginteacher.html">
                    <input type="text" id="username" name="username" placeholder="Username">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <input class="btnSubmit" type="submit" value="LOGIN">
                </form>
                <div id="error" style="color: red;"></div>
            </div>
        </div>
    </div>
</body>
</html>