import React, {useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'

import HomeLogin from './HomeLogin'
import Menu from './Menu'

import './divlogimp.scss'

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
    }

    return (
        <div className='divlogimp_container'>
            {
                conectado ? <div className='usuario' ><p className='usuario_welcome'>Bienvenido, </p><strong>{nombre}</strong></div>: <button onClick={toggleDiv} className='btn_iniciar_sesion' ><AiOutlineUser className='icon' /><p>Inicia Sesión</p></button>
            }
            
            
            <div className={showDiv ? 'logger_register show':'logger_register'}>
            { conectado ? <h1>Bienvenido...</h1>: <HomeLogin acceder={acceder} userName={nombreUsuario} />}
            </div>
        </div>
    )
}

export default DivLogimp