import {useState} from 'react';
import productos from '../../productos/productos.json';

import './barra.scss';

function Barra(){

    const [showMenu, setShowMenu] = useState('');

    function toggleMenu(){
        setShowMenu(!showMenu);
    }

    return(
        <div className='barra_container'>
            <ul className='lista_tipos_container'>
            {productos.map(e=>(
                <li className='barra_tipos' onClick={toggleMenu}>
                    {
                        e.ctgria_tipo
                    }
                    <ul className='lista_productos_container'>
                        {
                            e.ctgria_productos.map(f => (
                                <li className={showMenu ? 'barra_productos show':'barra_productos'} >
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