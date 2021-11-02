import navoptions from './navbar_menu.json';
import './navbar.scss';
import {AiOutlineDown} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import {BiUser} from "react-icons/bi"
import {CgShoppingCart} from "react-icons/cg"
function Navbar() {

    return(
        <div className='navbar_container'>
            <a href="">
            <img src={require('../img/navbar/logointikisa.png').default} />
            </a>
                <div className='navbar_nav_menu'>
                    <ul className='nav_list'>
                        {
                            navoptions.map((item) => (
                                <li key={item.id}>
                                    <p>{item.section}<a href=" "><AiOutlineDown className="rs_icon"/></a></p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            <div className='navbar_nav_options'>
                <a href="">
                <FiSearch className="rs_icon"/>
                </a>
                <a href="">
                <BiUser className="rs_icon"/>
                </a>
                <a href="">
                <CgShoppingCart className="rs_icon"/>
                </a>
            </div>
        </div>
    )
}

export default Navbar;