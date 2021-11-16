import React, {useState, useRef} from 'react'

import {BsCartPlus} from 'react-icons/bs';
import DivLogimp from '../Login/DivLogimp';
import HomeLogin from '../Login/HomeLogin';

//INSERTAR CARRITO
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

function CarritoAdd(props){

    const [userNombre, setUserNombre] = useState(null);

    const logUser = (nombre) => {
        setUserNombre(nombre)
    }

    const [conectado, setConectado] = useState(false);

    const vamosConect = (estado) => {
        setConectado(estado)
    }

    //ADDCARRITO

    const insertarCarrito = async () => {
        const data = {
            "user_nombre": userNombre,
            "carrito_fecha": "10/10/10",
            "carrito_producto": 'refProducto',
            "carrito_precio": 24
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