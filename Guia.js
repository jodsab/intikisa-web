import {useState} from 'react';

import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

import productos from '../../productos/productos.json'
import Producto from './Producto';

import Guiasub from './Guiasub';

import './guia.scss'

function Guia(){

    return(
        <div className='guia_container'>
            <HashRouter>
            <Link to='/'>INICIO</Link>  
                <ul className='lista_tipos'>
                {
                    productos.map(e => (
                        <li key={e.id_ctgria} className='div_tipos_container'>
                            <div className='title_tipo'>
                                <Link to={`/${e.ctgria_tipo}`} >
                                    <div className='title_tipo'>
                                        {e.ctgria_tipo}
                                    </div>
                                </Link> 
                            </div>
                            <ul className='lista_productos'>
                            {
                                e.ctgria_productos.map(f => (
                                    <li key={f.id_prod} className='div_producto_container'>
                                        <Link to={`/${e.ctgria_tipo}/${f.prod_link}`}>{f.prod_name}</Link>
                                        <div className='producto_contenido'>
                                            <div className='img'></div>
                                            <p className='ingredientes'>{f.prod_ingredientes}</p>
                                        </div>
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
                                <Route path={`/${f.ctgria_tipo}/${g.prod_link}`} element={<Producto namess={g.prod_name} />} >
                                
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