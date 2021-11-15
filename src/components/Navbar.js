import {useState} from 'react';

import './navbar.scss';
import {CgShoppingCart} from "react-icons/cg"
import {HiMenu} from "react-icons/hi"
import DivLogimp from './Login/DivLogimp';
import Menu from './Login/Menu';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [connected, setConnected] = useState(false);

    return(
        <div className='navbar_container'>
            <div>
                <img src={require('../img/navbar/logointikisa.png').default} className='img_logo' alt='logo intikisa' />
            </div>
            <div className={sidebar ? 'navbar_nav active' : 'navbar_nav'} >
                
                <div className='navbar_nav_options'>
                    <DivLogimp className="rs_icon"/>
                    <CgShoppingCart className="rs_icon"/>
                </div>
            </div>  
            <div className='menu_options'>
                <HiMenu onClick={showSidebar}/>
            </div>
        </div>
    )
}

export default Navbar;