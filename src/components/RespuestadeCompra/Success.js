import {useState, useEffect} from 'react';

import { getUserName, getPasswordUser } from '../Helpers/auth-helpers';

import './success.scss';

const URL_OBTENER_PRODUCTOS_DEL_CARRITO = "https://intikisaperu.com/oficial/obtenercarrito.php";

const URL_OBTENER_DATOS_CLIENTE = "https://intikisaperu.com/oficial/login.php";

const URL_REGISTRAR_VENTA_DEL_CARRITO = "https://intikisaperu.com/oficial/registrarventa.php";

const URL_OBTENER_VENTAS_POR_USUARIO = "https://intikisaperu.com/oficial/obtenerventa.php";

const URL_BORRAR_TODO_EN_CARRITO = "https://intikisaperu.com/oficial/borrartodoencarrito.php";

const URL_ENVIAR_MENSAJE_A_ADMINISTRADOR_DE_CARRITO_COMPRADO = "https://intikisaperu.com/oficial/mercadopago/mensajeriaphpmailer.php"

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

const borrarTotalCarrito = async (url, data) => {

    const respBorrar = await fetch (url, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const respBjson = await respBorrar.json();

    return respBjson
}

const obtenerDatosUser = async (url, data) => {
    
    const respDatosUser = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const datosuserjson = await respDatosUser.json();

    return datosuserjson;
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

const obtenerVenta = async (url, data) => {

    const respObtenerVenta = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const rovjson = await respObtenerVenta.json();

    return rovjson;
}

const enviarMensajeaAdmin = async (url,data) => {

    const respMensaje = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    const respMsg = await respMensaje.json();

    return respMsg;
}

function Success(){

    const [userId, setUserId] = useState('');
    const [userNombre, setUserNombre] = useState('');
    const [userCelular, setUserCelular] = useState('');
    const [userDireccion, setUserDireccion] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const[user, setUser] = useState({});
    const [items, setItems] = useState([]);

    const [itemsventas, setItemsVentas] = useState([]);

    

    const gettingDate = () => {
        const d = new Date();

        var fechita = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;

        return fechita
    } 

    const cogerDatosUsuario = async () => {
        const userdata = {
            "user_nombre": getUserName(),
            "user_password": getPasswordUser(),
        }

        const userJson = await obtenerDatosUser(URL_OBTENER_DATOS_CLIENTE, userdata);

        return userJson;
    }

    const itemscarrito = async () => {
        const itemdata = {
            "user_nombre": getUserName(),
        }
    
        const itemsJson = await cogerCarrito(URL_OBTENER_PRODUCTOS_DEL_CARRITO, itemdata);

        await itemsJson.map(e => registrandoVentas(e.idprod, e.producto, e.precio))

        return itemsJson;
    }

    async function registrandoVentas (idprod, prodnombre, prodprecio) {

        const itemRegistrado = {
            "venta_user_nombre": getUserName(),
            "venta_id_producto": idprod,
            "venta_estado_venta": "no entregado",
            "venta_nombre_producto": prodnombre,
            "venta_precio": prodprecio,
            "venta_user_celular": userId,
            "venta_user_direccion": userDireccion,
            "venta_user_email": userEmail,
            "venta_fecha_venta": gettingDate(),
        }
   
        const respRegistroVenta = await registrarVenta(URL_REGISTRAR_VENTA_DEL_CARRITO, itemRegistrado)

    }   

    const obtenerVentas = async () => {
        const itemObtener = {
            "user_nombre": getUserName(),
        }

        const obtenerItemVentas = await obtenerVenta(URL_OBTENER_VENTAS_POR_USUARIO, itemObtener);
        console.log(obtenerItemVentas);
        setItemsVentas(obtenerItemVentas)

        return obtenerItemVentas;
    }

    const borrarCarritos = async () => {
        const itemaBorrar = {
            "carrito_user_nombre": getUserName(),
        }

        const answ = await borrarTotalCarrito(URL_BORRAR_TODO_EN_CARRITO, itemaBorrar);
        console.log(answ);
    }

    async function enviarMsgAcmin (ppl, msj) {

        const mensaje = {
            "id_user": ppl.usuario,
            "nombre_user": ppl.nombre,
            "email_user": ppl.email,
            "direccion_user": ppl.direccion,
            "celular_user": ppl.celular,
            "mensaje_contenido": msj,
        }

        const resp = await enviarMensajeaAdmin(URL_ENVIAR_MENSAJE_A_ADMINISTRADOR_DE_CARRITO_COMPRADO, mensaje);

    }

    const validarWeb = async () => {
        if(window.location.href.search('approved') != -1){
            const eluser = await cogerDatosUsuario();
            const lositems = await itemscarrito();
            await enviarMsgAcmin(eluser,lositems);
            await borrarCarritos();
        }    
    }

    useEffect(() => {
        validarWeb()
        obtenerVentas();
        
    },[]);

    return(
        <div className='success_container'>
            <h4>Gracias por tu compra.</h4>
            <p>Compra exitosa, en las proximas 24 horas nos estaremos comunicando contigo para coordinar la entrega.</p>
            <div className='productos_container_div'>
                <p>Compras: </p>
                <ul className='productos_lista_ul'>
                {
                    itemsventas.map(e=> (
                        <li className='productos_item_li' > 
                        
                            <img src={require(`../../img/productos/${e.vproducto}.png`).default} className='foto_producto_img' ></img>
                            <p className='nombre_producto' >{e.vproducto} </p>
                            <p className='precio_producto' >S/.{e.vprecio}.00 </p>
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