
<?php
include_once "config.php"

// Get email from AJAX request
$email = $_POST['email'];

// Check if email exists in database
$query = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
  // Generate reset token
  $resetToken = bin2hex(random_bytes(16));
  $query = "UPDATE users SET reset_token = '$resetToken' WHERE email = '$email'";
  $conn->query($query);

  // Send password reset email
  $to = $email;
  $subject = 'Password Reset';
  $message = 'Click this link to reset your password: (link unavailable)' . $resetToken;
  $headers = 'From: example@example.com';
  mail($to, $subject, $message, $headers);

  echo 'Password reset email sent successfully!';
} else {
  echo 'Email not found!';
}

$conn->close();
?>