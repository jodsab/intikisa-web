import {useState, useEffect} from 'react';

import './producto.scss';

import CarritoAdd from '../Carrito/CarritoAdd';

const URL_PRODUCTOS = "https://intikisaperu.com/oficial/api/imagenes.php";
export const callImages = async (url, data) => {

    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await resp.json();

    return json;
}  


function Producto(props){

    const procs = props.namess;

    const [fotoMuestra, setFotoMuestra] = useState(procs.produrl);

    const [arrayFotos, setArrayFotos] = useState([]);

    const fetchImagenes = async () => {
        const data = {
            "producto_imgs": props.namess.prodid,
        }

        const respuestaJson = await callImages(URL_PRODUCTOS, data);
        console.log(respuestaJson);
        setArrayFotos(respuestaJson)
        return respuestaJson
    }

    useEffect(async () => {
        await fetchImagenes();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, []);

    return(
        <div className='producto_container_xdd'>
            <div className='title_del_producto'>
                <h3>{procs.prodcategoriaurl}: {procs.prodnombre} </h3>
            </div>
            <div className='producto_container'>
                <div className='fotos_producto' >
                    <ul className='lista_fotos_productos'>
                        {
                            arrayFotos.map(e => (
                            <li className='foto_cada_producto'  onClick={() => setFotoMuestra(e.imagen_producto)}>
                                <img src={`${e.imagen_producto}`} className='fotos_varias_prod' alt={e.id_img} />
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='container_muestra'>
                    <img src={`${fotoMuestra}`} className='foto_muestra_producto' alt={fotoMuestra} ></img>
                </div>
                <div className='description'>
                    <h4 className='nombre'>{procs.prodnombre} </h4>
                    {/* <p className='ingredientes'>{procs.prod_ingredientes} </p> */}
                    {
                            procs.prodstatus === 0 ? <div className='comprar'>
                            <p className='precio'>S/.{procs.proprecio}</p>
                            <div className='div_icon_add_tocart'>
                                    <CarritoAdd className='carrito' nombre={`${procs.prodnombre}`} precio={`${procs.proprecio}`} />
                                    <p className='add_to_cart'>Agregar al carrito</p>
                                </div>
                            </div>
                            :
                            <p>Pronto</p>
                        }
                    
                    <p className='propiedades'>{procs.proddescripcion} </p>
                
                </div>
            </div>
        </div>
        
    )
}

export default Producto; 