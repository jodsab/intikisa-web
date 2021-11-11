import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";
import {useState} from 'react';

import './producto.scss';

import {BsCartPlus} from 'react-icons/bs';
import CarritoAdd from '../Carrito/CarritoAdd';

function Producto(props){

    const [fotoMuestra, setFotoMuestra] = useState('zapallolochenpasta.png');

    const procs = props.namess;

    return(
        <div>
            <div className='title_del_producto'>
                <h3>{props.pre}: {procs.prod_name} </h3>
            </div>
            <div className='producto_container'>
                <div className='fotos_producto' >
                    <ul className='lista_fotos_productos'>
                        {
                            procs.prod_src.map(e => (
                            <li className='foto_cada_producto'  onClick={() => setFotoMuestra(e)}>
                                <img src={require(`../../img/productos/${e}`).default} className='fotos_varias_prod' />
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='container_muestra'>
                    <img src={require(`../../img/productos/${fotoMuestra}`).default} className='foto_muestra_producto'></img>
                </div>
                <div className='description'>
                    <h4 className='nombre'>{procs.prod_name} </h4>
                    <p className='ingredientes'>{procs.prod_ingredientes} </p>
                    <div className='comprar'>
                        <p className='precio'>S/20.00</p>
                        <CarritoAdd className='carrito' />
                    </div>
                    <p className='propiedades'>{procs.prod_propiedades} </p>
                
                </div>
            </div>
        </div>
        
    )
}

export default Producto; 