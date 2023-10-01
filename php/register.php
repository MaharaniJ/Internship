<?php
include 'db.php';

// Handle user registration using prepared statements
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get registration data
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Add more fields as needed
    
    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // SQL statement for registration
    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    
    // Prepare and execute the statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $hashed_password);
    
    if ($stmt->execute() === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
