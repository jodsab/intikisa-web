<?php
	include "conectar.php";
    $conn = conectarDB();

	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
    session_start();    
    $conn->set_charset('utf8');
	
	$user_nombre= $dataObject-> nombre;
	$user_celular= $dataObject-> celular;
	$user_direccion= $dataObject-> direccion;
	$user_email= $dataObject-> email;	
	$user_password = password_hash($password, PASSWORD_DEFAULT);
	
	echo $password;
	echo "<br/>";
	echo $user_password;
	echo "<hr/>";
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (user_nombre, user_password, user_celular, user_direccion, user_email)
VALUES ('$user_nombre', '$user_password', '$user_celular', '$user_direccion', '$user_email' )
WHERE NOT EXISTS ( SELECT * FROM users
WHERE user_nombre = '$user_nombre' ";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>