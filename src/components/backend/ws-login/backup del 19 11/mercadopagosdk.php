<?php
// SDK de Mercado Pago
php composer.phar require "mercadopago/dx-php"

require __DIR__ .  '/vendor/autoload.php';
// Agrega credenciales


MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>