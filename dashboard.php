<?php
session_start();

if (!isset($_SESSION['engineer'])) {
    header("Location: index.html");
    exit();
}

/* logout inside dashboard */
if (isset($_POST['logout'])) {
    session_destroy();
    header("Location: index.html");
    exit();
}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Engineer Dashboard</title>
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="static/css/media.css">
</head>
<body>

    <form method="POST">
        <button type="submit" name="logout" class="logout-btn">Logout</button>
    </form>

    <h2>Welcome Engineer</h2>
    <p>Email: <?php echo $_SESSION['engineer']; ?></p>

   
    

</body>
</html>
