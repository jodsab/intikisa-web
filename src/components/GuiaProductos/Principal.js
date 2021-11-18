import {useState, useEffect} from 'react';

import './principal.scss';

import CarritoAdd from '../Carrito/CarritoAdd';

import SliderMenu from '../Slider/SliderMenu';

import productos from "../../productos/productos.json";
import { Link } from 'react-router-dom';

function Principal(props){

    /* const procs = props.namess;

    const [fotoMuestra, setFotoMuestra] = useState(procs.prod_src[0]); */

    return(
        <div className='principal_container'>
            <SliderMenu />
            <ul className='lista_productos_menu_principal'>
            {
                productos.map((e) => (
                    e.ctgria_productos.map((f) => (
                        <li className='producto_div_final'>
                            <a href={`${window.location}${e.ctgria_tipo}/${f.prod_link}`}>
                        <div className='producto_container'>
                            <h4 className='nombre'>{f.prod_name} </h4>
                            <div className='container_muestra'>
                                <img src={require(`../../img/productos/${f.prod_src[0]}`).default} className='foto_muestra_producto' alt={f.prod_name} ></img>
                            </div>
                            <div className='description'>
                    
                                <div className='comprar'>
                                    <p className='precio'>S/.{f.prod_precio}.00 </p>
                                        <div className='div_icon_add_tocart'>
                                            <CarritoAdd className='carrito' nombre={`${f.prod_name}`} precio={`${f.prod_precio}`} />
                                            <p className='add_to_cart'>Agregar</p>
                                        </div>
                        
                                </div>
                
                            </div>
                        </div>
                            </a>
                        </li>
                    ))
                ))
            }
            </ul>
            
        </div>
        
    )
}

export default Principal; 