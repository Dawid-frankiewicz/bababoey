<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500"); // Poprawiona literówka w nagłówku

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'dane';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Błąd połączenia " . $conn->connect_error); // Dodano średnik na końcu linii
} else {
    $sql = "SELECT * FROM dane"; // Dodano brakujący średnik na końcu linii
    $result = $conn->query($sql);
    $data = array();

    if ($result->num_rows > 0) {
        while ($temp = $result->fetch_assoc()) {
            $data[] = $temp;
        }
    }
}

echo json_encode($data);

header('Content-Type: application/json');
$conn->close();
?>
