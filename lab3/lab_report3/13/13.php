<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['User_name'])) {
    $username = $conn->real_escape_string($_GET['User_name']);


    $sql = "SELECT COUNT(*) AS count FROM users WHERE User_name = '$username'";
    $result = $conn->query($sql);


    if ($result && $row = $result->fetch_assoc()) {
        if ($row['count'] > 0) {

            echo json_encode(['available' => false]);
        } else {

            echo json_encode(['available' => true]);
        }
    } else {

        echo json_encode(['available' => false]);
    }

    $conn->close();
} else {

    echo json_encode(['available' => false]);
}
