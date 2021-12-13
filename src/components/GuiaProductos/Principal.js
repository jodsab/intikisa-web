import {useState, useEffect} from 'react';

import './principal.scss';

import CarritoAdd from '../Carrito/CarritoAdd';

import SliderMenu from '../Slider/SliderMenu';

/* import productos from "../../productos/productos.json"; */

import aexportapi from '../api/aexportapi';
const URL_PRODUCTOS = "https://intikisaperu.com/oficial/api/productos.php";

function Principal(props){

    /* const procs = props.namess;

    const [fotoMuestra, setFotoMuestra] = useState(procs.prod_src[0]); */

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
        console.log(productosarray);
        return productosarray;
    }

    useEffect(async () => {
        const prods = await llamadaProductos();
        setProductos(prods);
    }, []);

    return(
        <div className='principal_container'>
            <SliderMenu />
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
                                        <p className='precio'>S/.{e.proprecio} </p>
                                    </div>
                
                                </div>
                            </div>
                            </a>
                            {
                                e.prodstatus == 0 ?
                                <div className='div_icon_add_tocart'>

                                            <CarritoAdd className='carrito' nombre={`${e.prodnombre}`} precio={`${e.proprecio}`} />
                                            <p className='add_to_cart'>Agregar</p>
                                </div>
                            : <p>Pronto</p>
                            }
                        </li>
                    ))
                }
                
            {/* {
                productos.map((e) => (
                    e.ctgria_productos.map((f) => (
                        <li className='producto_div_final'>
                            <a href={`https://intikisaperu.com/#/${e.prodcategoriaurl}/${f.prod_link}`}>
                            <div className='producto_container'>
                                <h4 className='nombre'>{f.prod_name} </h4>
                                <div className='container_muestra'>
                                    <img src={require(`../../img/productos/${f.prod_src[0]}`).default} className='foto_muestra_producto' alt={f.prod_name} ></img>
                                </div>
                                <div className='description'>
                    
                                    <div className='comprar'>
                                        <p className='precio'>S/.{f.prod_precio}.00 </p>
                                        
                                    </div>
                
                                </div>
                            </div>
                            </a>
                            {
                                f.prod_status == 0 ?
                                <div className='div_icon_add_tocart'>

                                            <CarritoAdd className='carrito' nombre={`${f.prod_name}`} precio={`${f.prod_precio}`} />
                                            <p className='add_to_cart'>Agregar</p>
                                </div>
                            : <p>Pronto</p>
                            }

                            
                        </li>
                    ))
                ))
            } */}
            </ul>
            
        </div>
        
    )
}

export default Principal; 