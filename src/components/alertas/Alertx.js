import {AiOutlineClose} from 'react-icons/ai'
import {useState, useEffect} from 'react';

import './alertx.scss'

export function Alertx() {

    const [msgAlert, setMsgAlert] = useState(false);

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
                <input className='input_email' tpye='email' name='email'>
                </input>   
            </div>  
            <input className='btn_suscribirse' type='submit' value='SUSCRIBIRSE'>
            </input>
            <button className='cerrar_ventana' onClick={()=>{setMsgAlert(false)}}>
                X
            </button>
        </div>
        </div>
    )
}
