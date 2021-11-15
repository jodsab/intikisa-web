import React, {useState, useRef} from 'react'

import {BsCartPlus} from 'react-icons/bs';

//LOGIN SETUP
const URL_INSERTAR_CARRITO = "https://intikisaperu.com/oficial/insertarcarrito.php";

const enviarData = async (url, data) => {

    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await resp.json();
    console.log(json);

    return json;
}

function CarritoAdd(){

    //ADDCARRITO

    const refUsuario = useRef(null);
    const refFecha = useRef(null);
    const refProducto = useRef(null);
    const refPrecio = useRef(null);

    const insertarCarrito = async () => {
        const data = {
            //"user_nombre": refUsuario.current.value,
            //"carrito_fecha": refFecha.current.value,
            //"carrito_producto": refProducto.current.value,
            //"carrito_precio": refPrecio.current.value,
            "user_nombre": "sadsa",
            "carrito_fecha": "10/10/10",
            "carrito_producto": "dasdad",
            "carrito_precio": 14,
        }

        console.log(data);
        const respuestaJson = await enviarData(URL_INSERTAR_CARRITO, data);
        console.log("respuesta desde el evento insertar carrito", respuestaJson);
    }

    return(
        <div>
            <button onClick={insertarCarrito}>
                <BsCartPlus className='carrito' />
            </button>
        </div>
    )
}

export default CarritoAdd;