import {useState} from 'react';

import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

import productos from '../../productos/productos.json'
import Producto from './Producto';

import Guiasub from './Guiasub';

function Guia(){

    return(
        <div>
            <HashRouter>
                <ul>
                    <li>
                        <Link to='/'>INICIO</Link>                            
                    </li>
                {
                    productos.map(e => (
                        <li key={e.id_ctgria}>
                            <Link to={`/${e.ctgria_tipo}`}>{e.ctgria_tipo}</Link> 
                            <ul>
                            {
                                e.ctgria_productos.map(f => (
                                    <li key={f.id_prod}>
                                        <Link to={`/${e.ctgria_tipo}/${f.prod_link}`}>{f.prod_name}</Link>
                                    </li>
                                ))
                            }
                            </ul>    
                                                   
                        </li>
                    ))
                }
                </ul>

                <Routes>
                        <Route path={`/`} >
                                
                        </Route>  
                    {
                        productos.map(e => (
                            <Route path={`/${e.ctgria_tipo}`} element={<Producto namess={e.ctgria_tipo} />}>
                                
                            </Route>  
                        ))
                        
                    }
                    {
                        productos.map(f => (
                            f.ctgria_productos.map(g => (
                                <Route path={`/${f.ctgria_tipo}/${g.prod_link}`} element={<Producto namess={g.prod_name} />}>
                                
                                </Route>  
                            ))
                        ))
                    }

                </Routes>
            </HashRouter>
        </div>
    )
}

export default Guia;