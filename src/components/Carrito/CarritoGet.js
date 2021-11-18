import Axios from "axios";
import {AiFillMinusCircle, AiTwotoneExclamationCircle} from 'react-icons/ai';

import {useState, useEffect} from 'react';

import {CgShoppingCart} from "react-icons/cg"
import { getUserName } from "../Helpers/auth-helpers";
import DivLogimp from "../Login/DivLogimp";

import './carritoget.scss';

const URL_AGARRAR_CARRITO = "https://intikisaperu.com/oficial/productosencarrito.php";

const URL_OBTENER_PRODUCTOS_DEL_CARRITO = "https://intikisaperu.com/oficial/obtenercarrito.php";

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

const cogerCarrito = async (url, data) => {

    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const cogjson = await resp.json();

    return cogjson;
}

function CarritoGet(props){

    const [showDivCarrito, setShowDivCarrito] = useState(false);

    function toggleShowDivCarrito(){
        setShowDivCarrito(!showDivCarrito)
    }

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
            "user_nombre": getUserName(),
        }

        const respuestaJson = await enviarData(URL_AGARRAR_CARRITO, data);
        setProductos(respuestaJson.nproductos)
        itemscarrito();
    }

    const [items, setItems] = useState([]);

    const itemscarrito = async () => {
        const itemdata = {
            "user_nombre": getUserName(),
        }

        const itemsJson = await cogerCarrito(URL_OBTENER_PRODUCTOS_DEL_CARRITO, itemdata);
        setItems(itemsJson)
    }

    const [totalPorPagar, setTotalPorPagar] = useState(0);

    useEffect (() => {
        if(getUserName()){
            obtenercarrito();
        }
    }, [])

    return(
        <div className='carrito'>
            <div className='divlogin'>
                {
                    conected ? <div>conectado en {user} </div> : <DivLogimp namex={namex} connect={connect}  />
                }
            </div>
            <div className='divcarrito'>
                <button onClick={obtenercarrito, ()=>{setShowDivCarrito(!showDivCarrito)} } className="rs_icon"><CgShoppingCart  /></button>
                <div className='productos' >
                    {productos}
                </div>
                <div className='div_items_carrito'>
                    <div className={showDivCarrito ? 'div_productos show': 'div_productos'}>
                        <p>Productos en carrito: </p>
                        <ul>
                            {
                                items.map(e=>(
                                    <li className='div_productos_itemss'>
                                        <p className='simbolo_menos'><AiFillMinusCircle/></p>
                                        <div className='flex_items_div'>
                                            <div className='foto_espacio'>
                                                <img src={require(`../../img/productos/${e.producto}.png`).default} className='foto_png_producto_div' alt={e.producto} ></img>
                                            </div>
                                            <div className='nombre_precio'>
                                                <p className='nombre'>{e.producto}</p>
                                                <p className='precio'>S/.{e.precio}.00</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <p className='total_pago'>Total: {totalPorPagar} </p>
                        <button className='btn_pagar'>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoGet;