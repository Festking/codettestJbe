<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Process the data (e.g., send an email, save to a database, etc.)
    // For example, sending an email
    $to = "your-email@example.com"; // Replace with your email
    $headers = "From: " . $email;
    $email_subject = "Contact Form Submission: " . $subject;
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
} else {
    // Redirect to index.html if the form is not submitted
    header("Location: index.html");
    exit();
}
?>
