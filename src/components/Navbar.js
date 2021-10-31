import navoptions from './navbar_menu.json';
import './navbar.scss';

function Navbar() {

    return(
        <div className='navbar_container'>
            <div className='navbar_logo'>
                <img src={require('../img/navbar/logointikisa.png').default} />
                <div className='navbar_nav_menu'>
                    <ul className='nav_list'>
                        {
                            navoptions.map((item) => (
                                <li key={item.id}>
                                    <p>{item.section}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='navbar_cuenta'>
                <h1>Iniciar Sesión</h1>
            </div>
        </div>
    )
}

export default Navbar;