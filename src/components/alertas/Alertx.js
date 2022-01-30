import {useState, useEffect, useRef} from 'react';

import './alertx.scss'

const URL_VERIFICAR = "https://intikisaperu.com/oficial/api/suscripcion/verificarcorreo.php";
const URL_REGISTRO = "https://intikisaperu.com/oficial/api/suscripcion/registrarcorreo.php";
const URL_ENVIARCORREO = "https://intikisaperu.com/oficial/mercadopago/suscripcion.php";

export const fetchData = async (url, data) => {

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

export function Alertx() {

    const [msgAlert, setMsgAlert] = useState(false);
    const [respuesta, setRespuesta] = useState('')

    const refSubNombre = useRef(null)
    const refSubEmail = useRef(null)

    const registrandoUsuario = async () => {

        const data = {
            "user_nombre": refSubNombre.current.value,
            "user_email": refSubEmail.current.value
        }

        const respuestaJson = await fetchData(URL_REGISTRO, data);

        return respuestaJson;
    }

    const enviarCorreo = async () => {
        const data = {
            "user_nombre": refSubNombre.current.value,
            "user_email": refSubEmail.current.value
        }

        const respuestaJson = await fetchData(URL_ENVIARCORREO, data);
    }

    const buscarUsuario = async () => {

        const data = {
            "user_nombre": refSubNombre.current.value,
            "user_email": refSubEmail.current.value
        }

        const respuestaJson = await fetchData(URL_VERIFICAR, data);

        if(respuestaJson.conectado === true){
            setRespuesta('Parece que ya te has registrado antes.')
        }
        else{
            const respReg = await registrandoUsuario();
            if(respReg.registro === true){
                await enviarCorreo ();
                setRespuesta('Registrado con exito')
            }
            else{
                setRespuesta('No te has podido registrar')
            }
        }

        console.log(respuestaJson);
    }

    async function suscripcionUsuario (){
        await buscarUsuario();
    }

    useEffect(() => {
        function mostrarAlerta(){
            setMsgAlert(true);
        }
        
        setTimeout(mostrarAlerta, 2500)
    }, []);

    return (
        <div className={msgAlert ? 'alert_container show':'alert_container'}>
        <div className='alertx_container'>
            <div className='space_alert'>
                <img className='alerta' src={require('../../img/alertas/alertaintikisa.jpg').default} alt='alerta intikisa'/>
                <p>
                    Obtén <strong>S/ 20.00</strong> de descuento en tu primera compra suscribiendote
                </p>
            </div>
            <div className='formulario'>
                <label for='email'>Email: 
                </label>
                <input className='input_email' type='email' name='email' ref={refSubEmail}>
                </input>   
                <label for='nombre'>Nombre: 
                </label>
                <input className='input_email' type='text' name='nombre' ref={refSubNombre}>
                </input>   
            </div>  
            <div className='suscripcion'>  
                <p className='respuesta'>
                    {
                        respuesta
                    }
                </p>  
            </div>  
            <input className='btn_suscribirse' type='submit' value='SUSCRIBIRSE' onClick={()=>{suscripcionUsuario()}}>
            </input>
            <button className='cerrar_ventana' onClick={()=>{setMsgAlert(false)}}>
                X
            </button>
        </div>
        </div>
    )
}
