import { Link } from 'react-router-dom';

import './navbar.scss';
import CarritoGet from './Carrito/CarritoGet';

function Navbar() {

    return(
        <div className='navbar_container'>
            <div className='logo_intik'>
                <Link to={'/'} /* href='https://intikisaperu.com' */>
                <img src={require('../img/navbar/logointikisa.png').default} className='img_logo' alt='logo intikisa' />
                </Link>
            </div>
            <div className='navbar_nav_options'>
                <div className="container">
                    <CarritoGet />
                </div>
            </div>
        </div>
    )
}

export default Navbar;