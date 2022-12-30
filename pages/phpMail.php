<?php

$name = $_POST['fullName'];
$designation = $_POST['designation'];
$companyName = $_POST['companyName'];
$visitor_email = $_POST['email'];
$phoneNo = $_POST['phoneNo'];
$city = $_POST['city'];
$country = $_POST['country'];
$categories = $_POST['categories'];
$price = $_POST['price'];

$email_from = 'riderharsh720@gmail.com';
$email_subject = 'New Registration Form Submission';
$email_body = "User Name: $name.\n". "User Email: $visitor_email.\n". "Phone No: $phoneNo.\n" . "Company Name: $companyName.\n" . "Designation: $designation .\n". "City: $city.\n". "Country: $country.\n". "Categories: $categories.\n". "Price: $price.\n";
$to = 'harsh.yadav.1412@gmail.com';
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject, $email_body, $headers) ;
header("Location: register.html");

?>