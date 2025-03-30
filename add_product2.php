<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "project_1_db";

$conn = new mysqli($host,$user,$password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$filename = $_POST["filename"];
$file_type = $_POST["file_type"];
$file_size = $_POST["file_size"];
// $file_path = $_POST["file_path"];
// $upload_date= $_POST["upload_date"];
$description = $_POST["description"];
// $downloads_count = $_POST["downloads_count"];
// $checksum = $_POST["checksum"];

$sql = "INSERT INTO download_files(filename, file_type, file_size,upload_date,description) VALUES($filename, $file_type, $file_size, now(), $description)";

if ($conn->query($sql) === TRUE) {
   echo "New file uploaded successfully";
} else {
    echo "Error:" . $sql . "<br>" . $conn->error;
}

$conn->close();
?>