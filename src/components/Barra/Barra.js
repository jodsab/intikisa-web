import {useState} from 'react';
import productos from '../../productos/productos.json';
import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

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
            <HashRouter>
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
                                    <Link to={`/${e.ctgria_tipo}/${f.prod_link}`}>
                                    {
                                        f.prod_name
                                    }
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </li>
            ))}
            </ul>
            </HashRouter>
        </div>
    )
}

export default Barra;