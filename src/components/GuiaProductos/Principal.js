import {useState, useEffect} from 'react';

import './principal.scss';

import Izquierda from '../laterales/Izquierda';
import Derecha from '../laterales/Derecha';

import CarritoAdd from '../Carrito/CarritoAdd';

import SliderMenu from '../Slider/SliderMenu';

import aexportapi from '../../api/aexportapi';
import VideoSlider from '../video/VideoSlider';
const URL_PRODUCTOS = "https://intikisaperu.com/oficial/api/productos.php";


function Principal(props){

    const [productos, setProductos] = useState([]);

    const llamadaProductos = async () => {

        const data = {
            "user_nombre": "admin",
        }

        const respuestaJson = await aexportapi.callProductos(URL_PRODUCTOS, data);

        const productosarray = [];

        respuestaJson.map(e => {
            const index = productosarray.findIndex(object => object.prodid === e.prodid );

            if(index === -1 ){
                productosarray.push(e);
            }
        } )
        console.log(respuestaJson);
        return productosarray;
    }

    useEffect(async () => {
        const prods = await llamadaProductos();
        setProductos(prods);
    }, []);

    return(
        <div className='real_principal_container'>
        <VideoSlider />
        <div className='principal_container'>
            <Izquierda />
            
            <ul className='lista_productos_menu_principal'>
                {
                    productos.map((e) => (
                        <li className='producto_div_final'>
                            <a href={`#/${e.prodcategoriaurl}/${e.prodid}`} >
                            <div className='producto_container'>
                                <h4 className='nombre'>{e.prodnombre} </h4>
                                <div className='container_muestra'>
                                    <img src={`${e.produrl}`} className='foto_muestra_producto' alt={e.prod_name} ></img>
                                </div>
                                <div className='description'>
                    
                                    <div className='comprar'>
                                        <p className='sku'>SKU: {e.prodsku}</p>
                                        <div className='p_flex'><p className='sku'>ANTES:</p><p className='precioantes'> S/.{e.proprecio} </p></div>
                                        <p className='precio'>S/.{e.proprecioferta} </p>
                                    </div>
                
                                </div>
                            </div>
                            </a>
                            {
                                e.prodstatus == 0 ?
                                <div className='div_icon_add_tocart'>

                                            <CarritoAdd className='carrito' nombre={`${e.prodnombre}`} precio={`${e.proprecioferta}`} />
                                            {/* <p className='add_to_cart'>Agregar</p> */}
                                </div>
                            : <p>Pronto</p>
                            }
                        </li>
                    ))
                }
            </ul>
            <Derecha />
        </div>
        <SliderMenu />
        </div>        
    )
}

export default Principal; 