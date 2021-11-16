import Axios from "axios";
import {useState} from 'react';

import {CgShoppingCart} from "react-icons/cg"
import DivLogimp from "../Login/DivLogimp";

import './carritoget.scss';

const URL_AGARRAR_CARRITO = "https://intikisaperu.com/oficial/productosencarrito.php";

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

function CarritoPut(){

    const [conexion, setConexion] = useState(false);

    const [nuser, setNuser] = useState(null);

    const establecerConn = (estado) => {
        setConexion(estado)
    }

    const nombreUser = (nombre) => {
        setNuser(nombre)
    }

    const msj = () => {
        CarritoGet().mensaje()
    }

    return(
        <div>
            {
                conexion ? <button className='btn_carrito_comprar' onClick={msj} >
                                <CgShoppingCart />
                            </button>:<h1>Conectate</h1>
            }
        </div>
    )
}

function CarritoGet(props){

    const [conected, setConected] = useState(false);

    const [user, setUser] = useState('');

    const namex = (nombre) => {
        setUser(nombre)
    }

    const connect = (estado) => {
        setConected(estado)
    }

    const [productos, setProductos] = useState(0);

    const obtenercarrito = async () => {
        const data = {
            "user_nombre": user,
        }

        const respuestaJson = await enviarData(URL_AGARRAR_CARRITO, data);
        console.log(respuestaJson);
        console.log("respuesta desde el evento get carrito", respuestaJson);
        setProductos(respuestaJson.nproductos)
    }

    

    return(
        <div className='carrito'>
            <div className='divlogin'>
                {
                    conected ? <div>{user} </div> : <DivLogimp namex={namex} connect={connect}  />
                }
            </div>
            <div className='divcarrito'>
                <button onClick={obtenercarrito} className="rs_icon"><CgShoppingCart  /></button>
                <div className='productos' >
                    {productos}
                </div>
            </div>
        </div>
    )
}

export default CarritoGet;
export {CarritoPut}