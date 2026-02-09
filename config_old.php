<?php
$conn = new mysqli(
    "localhost",
    "u996918262_builtline",
    "8884134013@Charan",
    "u996918262_Builtline"
);

// $conn = mysqli_connect($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>
