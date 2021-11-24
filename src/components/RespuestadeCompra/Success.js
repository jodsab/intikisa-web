import {useState, useEffect} from 'react';

import { getUserName } from '../Helpers/auth-helpers';

import './success.scss'

const URL_OBTENER_PRODUCTOS_DEL_CARRITO = "https://intikisaperu.com/oficial/obtenercarrito.php";

const URL_REGISTRAR_VENTA_DEL_CARRITO = "https://intikisaperu.com/oficial/registrarventa.php";

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

const registrarVenta = async (url, data) => {

    const respRegistroVenta = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const rrvjson = await respRegistroVenta.json();

    return rrvjson;
}


function Success(){

    const estadoDePago = 'collection_status=approved';

    const [items, setItems] = useState([]);

    const [url, setUrl] = useState('');

    const itemscarrito = async () => {
        const itemdata = {
            "user_nombre": getUserName(),
        }
    
        const itemsJson = await cogerCarrito(URL_OBTENER_PRODUCTOS_DEL_CARRITO, itemdata);
    
        setItems(itemsJson)
    }

    const registrandoVentas = async () => {
        const itemRegistrado = {
            "user_nombre": getUserName(),
        }

        const registro = await registrarVenta(URL_REGISTRAR_VENTA_DEL_CARRITO, itemRegistrado);
    }

    useEffect(() => {
        itemscarrito();
        setUrl(window.location.href)
        const numUrl = url.search(estadoDePago)
        if(numUrl != -1 ){
            console.log("Existe nuevo pago");
        }
        else{
            console.log("No existe nuevo pago");
        }
    }, []);

    return(
        <div className='success_container'>
            <h4>Gracias por tu compra.</h4>
            <p>Compra exitosa, en las proximas 24 horas nos estaremos comunicando contigo.</p>
            <div className='productos_container_div'>
                <p>Compras: </p>
                <ul className='productos_lista_ul'>
                {
                    items.map(e=> (
                        <li className='productos_item_li'> 
                            <img src={require(`../../img/productos/${e.producto}.png`).default} className='foto_producto_img' ></img>
                            <p className='nombre_producto' >{e.producto} </p>
                            <p className='precio_producto' >S/.{e.precio}.00 </p>
                        </li>
                    ) )
                }
                </ul>
            </div>

            {/* <img src={require('../../img/respuestadecompra/perfil.jpg').default} className='perfil_foto' ></img>
            <div className='img_container' >
                <img src={require('../../img/respuestadecompra/msj.jpg').default} ></img>
            </div> */}
        </div>
    )
}

export default Success