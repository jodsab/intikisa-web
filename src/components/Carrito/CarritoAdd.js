import React, {useState, useRef, useEffect} from 'react'

import './carritoadd.scss';

import {BsCartPlus} from 'react-icons/bs';
import DivLogimp from '../Login/DivLogimp';
import HomeLogin from '../Login/HomeLogin';

import {setToken, setCurrentUser,getToken,getUserName,delenteToken} from '../Helpers/auth-helpers';

import {NotificationContainer, NotificationManager} from 'react-notifications';

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

    return json;
}

function CarritoAdd(props){

    function createNotification(type) {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Agregado al carrito');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };

    const [userNombre, setUserNombre] = useState(getUserName());

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
            "user_nombre": getUserName(),
            "carrito_fecha": "10/10/10",
            "carrito_producto": props.nombre,
            "carrito_precio": props.precio
        }

        console.log(data);
        const respuestaJson = await enviarData(URL_INSERTAR_CARRITO, data);
        createNotification('success')
    }
 
    return(
        <div className='add_container'>
            <button onClick={insertarCarrito} className='btn_add'>
                <BsCartPlus className='carrito' />
            </button>            
        </div>
    )
}

export default CarritoAdd;