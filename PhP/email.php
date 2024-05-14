<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "boylej97@hotmail.com"; // Change this to your email address

    // Set email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Compose email content
    $email_content = "<p><strong>Name:</strong> $name</p>";
    $email_content .= "<p><strong>Subject:</strong> $subject</p>";
    $email_content .= "<p><strong>Message:</strong> $message</p>";

    // Send email
if (mail($to, $subject, $email_content, $headers)) {
    print "Message sent successfully!";
} else {
    print "Error: Unable to send message.";
}
} else {
    print "Error: Invalid request.";
}
?>