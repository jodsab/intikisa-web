import {useState} from 'react';

import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

import {BsCartPlus} from 'react-icons/bs';

import './productos.scss';

function Productos(props){

    const prods = props.producs;

    return(
        <div>
            <ul className='productos_container'>
            {
                prods.map(e => (
                    <li className='producto_container'>
                        <Link to={`/${props.url}/${e.prod_link}`}>
                            <h4 className='nombre_producto'>{e.prod_name} </h4>
                            <img src={require(`../../img/productos/${e.prod_src}`).default} alt={e.prod_name} className='foto_producto'/>
                            <div className='pagar_ahora'>
                                <p>S/20.00</p>
                                <BsCartPlus className='carrito'/>
                            </div>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Productos;