import Axios from "axios";
import {useState} from 'react';

import {CgShoppingCart} from "react-icons/cg"

const URL_AGARRAR_CARRITO = "https://intikisaperu.com/oficial/obtenercarrito.php";

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

function CarritoGet(props){

    const obtenercarrito = async () => {
        const data = {
            "user_nombre": 'camilo',
        }

        const respuestaJson = await enviarData(URL_AGARRAR_CARRITO, data);
        console.log("respuesta desde el evento get carrito", respuestaJson);
        
    }

    return(
        <div>
            <CgShoppingCart className="rs_icon" onClick={obtenercarrito} />
            <p>PRODUCTOS: {productos}</p>
        </div>
    )
}

export default CarritoGet;