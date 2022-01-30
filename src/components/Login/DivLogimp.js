import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineUser, AiOutlineMenu} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {BsArrowRightCircle} from 'react-icons/bs'

import './divlogimp.scss'
import Categorias from '../Categorias'

function DivLogimp(props) {

    const [showMenu, setShowMenu] = useState(false);

    function cerrarMenu(){
        setShowMenu(!showMenu);
    }

    useEffect (() => {

    }, [])

    return (
        <div className='divlogimp_container'>
            <button className='btn_menu' onClick={()=> {setShowMenu(!showMenu)}} >
                <AiOutlineMenu />
            </button>
            <div className={showMenu ? 'flex_buttons show' :'flex_buttons' }>
                <div className='flex_btns_real'>
                    <Link to={'/login'} className='btn_iniciar_sesion' onClick={()=> {setShowMenu(!showMenu)} }>
                        <AiOutlineUser className='icon' />
                            <p className='letra2'>Mi cuenta</p>
                    </Link>
                    <Link to={'/contactanos'} className='btn_iniciar_sesion' onClick={()=> {setShowMenu(!showMenu)} }>
                        <BiMessageRounded className='icon' />
                            <p className='letra2'>Contacto</p>
                    </Link>
                    <Link to={'/pagar'} className='btn_iniciar_sesion' onClick={()=> {setShowMenu(!showMenu)} }>
                        <BsArrowRightCircle className='icon' />
                            <p className='letra2'>Pagar</p>
                    </Link>
                </div>
                <div className='categorias_ge'>
                    <Categorias cerrarMenu={cerrarMenu} />
                </div>
            </div>
        </div>
    )
}

export default DivLogimp