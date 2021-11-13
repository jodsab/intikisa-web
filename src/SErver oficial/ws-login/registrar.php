<?php
	include "conectar.php";
    $conn = conectarDB();

	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
    session_start();    
    $conn->set_charset('utf8');
	
	$usuario= $dataObject-> email;
	$nombre= $dataObject-> usuario;
	$apellidos= $dataObject-> usuario;
	$idTipoUsuario= "2";
	$password= $dataObject-> clave;	
	$clave = password_hash($password, PASSWORD_DEFAULT);
	
	echo $password;
	echo "<br/>";
	echo $clave;
	echo "<hr/>";
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (usuario, clave, nombre, apellidos, idTipoUsuario)
VALUES ('$usuario', '$clave', '$nombre', '$apellidos', '$idTipoUsuario' )
WHERE NOT EXISTS ( SELECT * FROM usuarios
WHERE usuario = '$usuario' ";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>