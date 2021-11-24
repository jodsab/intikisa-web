<?php
	header('Access-Control-Allow-Origin: *');  
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Content-Type: text/html; charset=utf-8");
	include "conectar.php";
    $conn = conectarDB();

	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);  
	
	$user_nombre= $dataObject-> venta_user_nombre;
    $producto_nombre = $dataObject-> venta_nombre_producto;
    $producto_precio = $dataObject-> venta_precio;
	$user_celular= $dataObject-> venta_user_celular;
	$user_direccion= $dataObject-> venta_user_direccion;
	$user_email= $dataObject-> venta_user_email;
    $fecha_venta = $dataObject-> venta_fecha_venta;

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO ventas (venta_nombre_usuario,venta_productos, venta_precio, venta_celular, venta_direccion, venta_email, venta_fecha) 
VALUES ('$user_nombre', '$producto_nombre', '$producto_precio', '$user_celular', '$user_direccion', '$user_email', '$fecha_venta')";


if ($conn->query($sql) == TRUE) {
	$resultado = $conn->query($sql);
	echo json_encode(array('registroventa'=>true, 'msj' => 'Venta registrada.'));
  
} else {
  	echo json_encode(array('registro'=>false, 'msj' => 'Venta no registrada'));
}

$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>