import React, {useState, useEffect} from 'react'
import {AiOutlineUser} from 'react-icons/ai'

import HomeLogin from './HomeLogin'

import './divlogimp.scss'
import { delenteToken, getUserName } from '../Helpers/auth-helpers'

function DivLogimp(props) {

    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv)
    }

    const [conectado, setConectado] = useState(false);

    const acceder = (estado) => {
        setConectado(estado)
    }

    const [nombre, setNombre] = useState('');

    const nombreUsuario = (name) => {
        setNombre(name)
        props.namex(nombre);
        props.connect(conectado);
    }

    const cerrarSesion = () => {
        setConectado(false);
        delenteToken();
        window.location.reload();
    } 
    useEffect (() => {
        if(getUserName()){
            setConectado(true);
            setNombre(getUserName())
        }
    }, [])

    return (
        <div className='divlogimp_container'>
            {
                conectado ? <div className='usuario' >
                                <button onClick={()=>{setShowDiv(!showDiv)}} className='cerrar_menu_iniciado' >
                                    <AiOutlineUser />
                                        <p className='usuario_welcome'>Bienvenido, </p>
                                            <strong>{nombre}</strong> 
                                </button>
                            </div>
                            : 
                            <button onClick={toggleDiv} className='btn_iniciar_sesion' >
                                <AiOutlineUser className='icon' />
                                    <p>Inicia Sesión</p>
                            </button>
            }
            
            <div className={showDiv ? 'logger_register show':'logger_register'}>
                <button className='cerrar_modal' onClick={()=>{setShowDiv(false)}} ><p className='cerrar_ventana'>X</p></button>
                {   
                    conectado ? <div className='menu_cerrar_sesion'>
                                    <h5>MENU</h5>
                                    <p className='msg_aqui_se_muestra' >Aqui se mostrarán tus compras</p>
                                    <p className='aun_no_tiene_compras'>*Aún no tienes compras</p>
                                        <button className='btn_cerrarsesion' onClick={cerrarSesion}>Cerrar Sesión</button>
                                </div>
                                : 
                                <HomeLogin acceder={acceder} userName={nombreUsuario} />
                }
            </div>
        </div>
    )
}

export default DivLogimp