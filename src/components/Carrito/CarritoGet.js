import {AiFillMinusCircle, AiTwotoneExclamationCircle} from 'react-icons/ai';

import {useState, useEffect} from 'react';

import {CgShoppingCart} from "react-icons/cg"
import { getUserName } from "../Helpers/auth-helpers";
import DivLogimp from "../Login/DivLogimp";

import './carritoget.scss';

const URL_AGARRAR_CARRITO = "https://intikisaperu.com/oficial/productosencarrito.php";

const URL_OBTENER_PRODUCTOS_DEL_CARRITO = "https://intikisaperu.com/oficial/obtenercarrito.php";

const URL_BORRAR_PRODUCTO_DEL_CARRITO = "https://intikisaperu.com/oficial/borrardecarrito.php";

const URL_TOTAL_A_PAGAR = "https://intikisaperu.com/oficial/totalapagar.php";

const URL_REGISTRO_VENTA = "https://intikisaperu.com/oficial/registrarventa.php";

const URL_PASARELA_DE_PAGO = "https://api.mercadopago.com/checkout/preferences?access_token=APP_USR-7887698424202198-111920-4e13e41c68b56cfb2427a8b306243dc0-837446390";

const cobrarCliente = async (url, data) => {
    
    const respCobro = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const jsonrespCobro = await respCobro.json();

    return jsonrespCobro;
}

const enviarData = async (url, data) => {

    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const jsonenviar = await resp.json();

    return jsonenviar;
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

const borrardeCarrito = async(url, data) => {

    const respBorrar = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const borrado = await respBorrar.json();

    return borrado;
}

const totalDelCarrito = async(url, data) => {
    const resptotal = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const respuesTotal = await resptotal.json();
    return respuesTotal
}

const registrandoVentas = async(url,data) => {
    const respRegistrVenta = await fetch(url ,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'applicacion/json'
        }
    })

    const respuestaRegVenta = await respRegistrVenta.json();
    return respuestaRegVenta
}


function CarritoGet(props){

    const [urlCobro, setUrlCobro] = useState('');

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

    const cuantoPagar = async () => {
        const totalData = {
            "user_nombre": getUserName()
        }

        const totalaPagarxd = await totalDelCarrito(URL_TOTAL_A_PAGAR, totalData);
        setTotalPorPagar(parseInt(totalaPagarxd.pagoentotal))
    }

    const borrarCarrito = async (nombreuserx, idprod, producto) => {
        const itemdeleteData = {
            "carrito_user_nombre": nombreuserx,
            "id_carrito": idprod,
            "carrito_producto_nombre": producto
        }

        await borrardeCarrito(URL_BORRAR_PRODUCTO_DEL_CARRITO, itemdeleteData);
    }

    const realizarCobro = async(pagofinal)=>{
        const itemCobro = {
            "external_reference": "ABC",
                
            "items": [
                {
                  "title": "Carrito de Intikisa Peru",
                  "description": "Comprando diferentes productos de intikisa",
                  "picture_url": "https://images.app.goo.gl/oNYwH1ssJdWJiKKr5",
                  "quantity": 1,
                  "unit_price": pagofinal
                }
            ],
            "back_urls": {
                "success": "https://intikisaperu.com/#/compraexitosa",
                "failure": "https://intikisaperu.com/#/comprafallida",
                "pending": "https://intikisaperu.com/#/comprapendiente"
            },
            "auto_return": "approved",
        }

        const respuestaCobro = await cobrarCliente(URL_PASARELA_DE_PAGO, itemCobro); 

        console.log(respuestaCobro.sandbox_init_point);

        setUrlCobro(respuestaCobro.sandbox_init_point)

        return respuestaCobro.sandbox_init_point;

    }

    async function abrirUrlPago () {
        realizarCobro();
        const urlaux = await realizarCobro();
        setUrlCobro(urlaux);
        await window.open(realizarCobro(),"_blank");
        /* window.open(realizarCobro(),"_blank"); */
    }

    async function hacerTodo() {
        await obtenercarrito();
    }

    useEffect (() => {
        if(getUserName()){
            hacerTodo();
        }
    })

    return(
        <div className='carrito'>
            <div className='divlogin'>
                {
                    conected ? <div>conectado en {user} </div> : <DivLogimp namex={namex} connect={connect}  />
                }
            </div>
            <div className='divcarrito'>
                <button onClick={()=>{obtenercarrito();cuantoPagar();itemscarrito(); setShowDivCarrito(!showDivCarrito)}} className="rs_icon">
                    <CgShoppingCart  />
                </button>

                <div className='productos' >
                    {productos}
                </div>

                <div className='div_items_carrito'>

                    <div className={showDivCarrito ? 'div_productos show': 'div_productos'}>
                        <p className='productos_en_carrito'>Productos en carrito: </p>
                        
                        <ul className='ul_menos'>
                            {
                                items.map(e=>(
                                    <li className='div_productos_itemss' >
                                        <button className='btn_delete' onClick={() => {borrarCarrito(e.usernombre,e.idprod,e.producto); itemscarrito(); cuantoPagar(); obtenercarrito()}} >
                                            <p className='simbolomenos'><AiFillMinusCircle /></p>
                                        </button>
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
                        <div className='div_pagar'>
                            <div className='div_pagando'>
                                <p className='total_pago'>Total: S/.{totalPorPagar}.00 </p>
                                <button className='btn_pagar cho-container' onClick={()=>{itemscarrito(); cuantoPagar(); obtenercarrito(); realizarCobro(totalPorPagar); abrirUrlPago()} } >Pagar</button>
                            </div>
                            <div className='div_foto_pagar'>
                                <img src={require(`../../img/pagos/bancos.png`).default} ></img>
                            </div>
                            <p className='msg_pago'>*Tu dinero seguro con Mercado Pago, VISA, MASTERCARD Y MÁS...</p>
                        </div>

                        
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoGet;