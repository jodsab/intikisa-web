import {useState, useEffect} from 'react';

import './producto.scss';

import CarritoAdd from '../Carrito/CarritoAdd';

function Producto(props){

    const procs = props.namess;

    const [fotoMuestra, setFotoMuestra] = useState(procs.prod_src[0]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, []);

    return(
        <div className='producto_container_xdd'>
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
                    {
                            props.status == 0 ? <div className='comprar'>
                            <p className='precio'>S/.{procs.prod_precio}.00 </p>
                            <div className='div_icon_add_tocart'>
                                    <CarritoAdd className='carrito' nombre={`${procs.prod_name}`} precio={`${procs.prod_precio}`} />
                                    <p className='add_to_cart'>Agregar al carrito</p>
                                </div>
                            </div>
                            :
                            <p>Pronto</p>
                        }
                    
                    <p className='propiedades'>{procs.prod_propiedades} </p>
                
                </div>
            </div>
        </div>
        
    )
}

export default Producto; 