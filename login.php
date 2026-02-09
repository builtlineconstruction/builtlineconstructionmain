<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
$error = "";

// Database connection
$conn = new mysqli(
    "localhost",
    "u996918262_builtline",
    "8884134013@Charan",
    "u996918262_Builtline"
);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

// Login logic
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['login'])) {

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Prepare query
    $stmt = $conn->prepare("SELECT email, password FROM engineers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows === 1) {
        $row = $result->fetch_assoc();

        // Debug: show exact DB values (remove after testing)
        // echo "Entered password: '".$password."' | DB password: '".$row['password']."'<br>";

        // Compare passwords safely for plain numbers (ignore spaces)
        if (strval($password) == strval(trim($row['password']))) {
            // Login success
            $_SESSION['engineer'] = $row['email'];
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Incorrect password";
        }
    } else {
        $error = "Email not found";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Engineer Login</title>
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="static/css/media.css">
</head>
<body>

<div class="login-container">
    <h2>Site Engineer Login</h2>

    <?php if (!empty($error)) : ?>
        <p class="error"><?php echo $error; ?></p>
    <?php endif; ?>

    <form method="POST" action="login.php">
        <input type="email" name="email" placeholder="Email" required><br>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="login">Login</button>
    </form>
</div>

</body>
</html>
