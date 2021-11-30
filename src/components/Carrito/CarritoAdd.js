import React, {useState, useRef, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './carritoadd.scss';

import {BsCartPlus} from 'react-icons/bs';

import {setToken, setCurrentUser,getToken,getUserName,delenteToken} from '../Helpers/auth-helpers';

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
  //ALERTAS
  const ingreseAsuCuenta = () => toast("Ingrese a su cuenta primero!", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const productoAgregado = () => toast("Producto agregado al carrito.", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const gettingDate = () => {
    const d = new Date();

    var fechita = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;

    return fechita
} 
  
      //ADDCARRITO

    const insertarCarrito = async () => {
        const data = {
            "user_nombre": getUserName(),
            "carrito_fecha": gettingDate(),
            "carrito_producto": props.nombre,
            "carrito_precio": props.precio
        }
        productoAgregado();
        const respuestaJson = await enviarData(URL_INSERTAR_CARRITO, data);
    }
 
    return(
        <div className='add_container'>
            <button onClick={()=>{getUserName() != null ? insertarCarrito() : ingreseAsuCuenta() } } className='btn_add'>
                <BsCartPlus className='carrito' />
                
            </button>            
        </div>
    )
}

export default CarritoAdd;