<?php
	header('Access-Control-Allow-Origin: *');  
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Content-Type: text/html; charset=utf-8");
	include "conectar.php";
    $conn = conectarDB();

	//$JSONData = file_get_contents("php://input");
	//$dataObject = json_decode($JSONData);    
    //session_start();    
    //$conn->set_charset('utf8');

	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);  
	
	$user_nombre= $dataObject-> user_nombre;


	echo $user_password;
	echo "<hr/>";

	$response = [];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT SUM(carrito_precio) 
FROM carritos 
WHERE carrito_user_nombre = '$user_nombre'";

if ($conn->query($sql) == TRUE) {

    $resultado = $conn->query($sql);

    $row = $resultado-> fetch_assoc();
    ($response = array( 'pagar' => true, 'precio' => $row['SUM(carrito_precio)']));
	echo json_encode($response);

} else {
  echo json_encode(array('pagar' => false, 'precio' => 0));
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>