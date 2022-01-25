import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineUser, AiOutlineMenu} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsArrowRightCircle} from 'react-icons/bs'

import './divlogimp.scss'
import { delenteToken, getUserName } from '../../Helpers/auth-helpers'

function DivLogimp(props) {

    const [showMenu, setShowMenu] = useState(false);
    
    const [conectado, setConectado] = useState(false);

    const [nombre, setNombre] = useState('');

    useEffect (() => {
        if(getUserName()){
            setConectado(true);
            setNombre(getUserName())
        }
    }, [])

    return (
        <div className='divlogimp_container'>
            <button className='btn_menu' onClick={()=> {setShowMenu(!showMenu)}} >
                <AiOutlineMenu />
            </button>

            <div className={showMenu ? 'flex_buttons show' :'flex_buttons' }>
                <Link to={'/login'} className='btn_iniciar_sesion' onClick={()=> {setShowMenu(!showMenu)} }>
                    <AiOutlineUser className='icon' />
                        <p className='letra'>Mi cuenta</p>
                </Link>
                <Link to={'/contactanos'} className='btn_iniciar_sesion' onClick={()=> {setShowMenu(!showMenu)} }>
                    <BiMessageRounded className='icon' />
                        <p className='letra'>Contacto</p>
                </Link>
                <Link to={'/pagar'} className='btn_iniciar_sesion' onClick={()=> {setShowMenu(!showMenu)} }>
                    <BsArrowRightCircle className='icon' />
                        <p className='letra'>Pagar</p>
                </Link>
            </div>
        </div>
    )
}

export default DivLogimp