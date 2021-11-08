import {useState} from 'react';

import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

import productos from '../../productos/productos.json'
import Producto from './Producto';

function Guiasub(){
    return(
        <div>
            <HashRouter>
                <ul clasName=''>
                {
                    productos.map(e => (
                        <li>
                            <Link to={e.ctgria_tipo}>{e.ctgria_tipo}</Link>

                                
                            
                                <ul>
                                {e.ctgria_productos.map(g => (
                                    <li>
                                        {g.prod_name}
                                    </li>
                                ))}
                                </ul>
                            
                        </li>
                    ))
                }
                </ul>

                <Routes>
                    {
                        productos.map(e => (
                            <Route path={`/${e.ctgria_tipo}`} element={<Producto />} />
                        ))
                    }
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Guiasub;