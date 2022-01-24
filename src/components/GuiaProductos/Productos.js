import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

import './productos.scss';
import CarritoAdd from '../Carrito/CarritoAdd';

import aexportapi from '../api/aexportapi';
const URL_PRODUCTOS = "https://intikisaperu.com/oficial/api/productos.php";

function Productos(props){

    const prods = props.producs;
    
    const [categoriasX, setCategoriasDeProds] = useState([]);

    const procs = props.namess;

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
        setProductos(productosarray);
        return productosarray;
    }
    const categorias = async () => {
        const cats = await llamadaProductos();
  
        const productosarrayCat = [];

          cats.map(e => {

              if(e.prodcategoria == props.categoriaid){
                productosarrayCat.push(e)
              }
          } )

          setCategoriasDeProds(productosarrayCat)
          
      }


    useEffect(async () => {
        await categorias();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, []);

    return(
        <div className='productos_cont_todo'>
            <div className='url_tipo'>
                <h3>{props.url.toUpperCase()} :</h3>
            </div>
            <ul className='productos_container'>
            {
                categoriasX.map(e => (
                    <li className='productos_item_container'>
                        <Link to={`/${e.prodcategoriaurl}/${e.prodid}`}>
                            <h4 className='nombre_producto'>{e.prodnombre} </h4>
                            <img src={`${e.produrl}`} alt={e.prodnombre} className='foto_producto'/>
                        </Link>
                            <div className='pagar_ahora'>
                                <p>S/.{e.proprecio}</p>
                                <div className='add_to_cart_div'>
                                    {
                                        e.prodstatus == 0 ? 
                                        <div>
                                            <CarritoAdd className='carrito' nombre={`${e.prodnombre}`} precio={`${e.proprecioferta}`} />
                                            {/* <p className='add_to_cart'>Agregar</p> */}
                                        </div>
                                        : 
                                        <p>Pronto</p>
                                    }
                                    
                                </div>
                            </div>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Productos;