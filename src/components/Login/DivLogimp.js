import React, {useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'

import HomeLogin from './HomeLogin'

import './divlogimp.scss'

function DivLogimp() {

    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv)
    }

    return (
        <div className='divlogimp_container'>
            <button onClick={toggleDiv}><AiOutlineUser /></button>
            <div className={showDiv ? 'logger_register show':'logger_register'}>
                <HomeLogin />
            </div>
        </div>
    )
}

export default DivLogimp