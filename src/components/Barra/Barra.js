import {useState} from 'react';
import productos from '../../productos/productos.json';

import './barra.scss';

function Barra(){

    const [showMenu, setShowMenu] = useState(true);

    function showingMenu(){
        setShowMenu(false);
    }

    function hideMenu(){
        setShowMenu(true);
    }
    

    return(
        <div className='barra_container'>
            <ul className='lista_tipos_container'>
            {productos.map(e=>(
                <li className='barra_tipos' onMouseOver ={showingMenu} onMouseOut={hideMenu}>
                    {
                        e.ctgria_tipo
                    }
                    <ul className='lista_productos_container' onMouseOVer={showingMenu} onMouseOut={hideMenu}  >
                        {
                            e.ctgria_productos.map(f => (
                                <li className={showMenu ? 'barra_productos ':`barra_productos show`} >
                                    {
                                        f.prod_name
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Barra;