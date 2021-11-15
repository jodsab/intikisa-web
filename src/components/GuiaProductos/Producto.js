import {useState} from 'react';

import './producto.scss';

import CarritoAdd from '../Carrito/CarritoAdd';

function Producto(props){

    const procs = props.namess;

    const [fotoMuestra, setFotoMuestra] = useState(procs.prod_src[0]);

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
                                <img src={require(`../../img/productos/${e}`).default} className='fotos_varias_prod' alt={e} />
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='container_muestra'>
                    <img src={require(`../../img/productos/${fotoMuestra}`).default} className='foto_muestra_producto' alt={fotoMuestra} ></img>
                </div>
                <div className='description'>
                    <h4 className='nombre'>{procs.prod_name} </h4>
                    <p className='ingredientes'>{procs.prod_ingredientes} </p>
                    <div className='comprar'>
                        <p className='precio'>S/.{procs.prod_precio} </p>
                        <CarritoAdd className='carrito' />
                    </div>
                    <p className='propiedades'>{procs.prod_propiedades} </p>
                
                </div>
            </div>
        </div>
        
    )
}

export default Producto; 