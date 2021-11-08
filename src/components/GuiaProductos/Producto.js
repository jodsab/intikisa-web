import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

import './producto.scss';

import {BsCartPlus} from 'react-icons/bs';

function Producto(props){

    const procs = props.namess;

    return(
        <div>
            <div className='title_del_producto'>
                <h3>{props.pre}: {procs.prod_name} </h3>
            </div>
            <div className='producto_container'>
                <div>
                    <img src={require(`../../img/productos/${procs.prod_src}`).default} className='img_producto'></img>
                </div>
                <div className='description'>
                    <h4 className='nombre'>{procs.prod_name} </h4>
                    <p className='ingredientes'>{procs.prod_ingredientes} </p>
                    <div className='comprar'>
                        <p className='precio'>S/20.00</p>
                        <BsCartPlus className='carrito' />
                    </div>
                    <p className='propiedades'>{procs.prod_propiedades} </p>
                
                </div>
            </div>
        </div>
        
    )
}

export default Producto; 