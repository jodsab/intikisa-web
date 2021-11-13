import React, {useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'

import HomeLogin from './HomeLogin'
import Menu from './Menu'

import './divlogimp.scss'

function DivLogimp() {

    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv)
    }

    const [conectado, setConectado] = useState(false);

    const acceder = (estado) => {
        setConectado(estado)
    }

    return (
        <div className='divlogimp_container'>
          

            <button onClick={toggleDiv}><AiOutlineUser /></button>
            <div className={showDiv ? 'logger_register show':'logger_register'}>
           { conectado ? <Menu /> : <HomeLogin acceder={acceder} />}
            </div>
        </div>
    )
}

export default DivLogimp