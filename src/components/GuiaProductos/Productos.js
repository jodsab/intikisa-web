import {Link} from 'react-router-dom';

import {BsCartPlus} from 'react-icons/bs';

import './productos.scss';
import CarritoAdd from '../Carrito/CarritoAdd';

function Productos(props){

    const prods = props.producs;

    return(
        <div className='productos_cont_todo'>
            <div className='url_tipo'>
                <h3>{props.url} :</h3>
            </div>
            <ul className='productos_container'>
            {
                prods.map(e => (
                    <li className='productos_item_container'>
                        <Link to={`/${props.url}/${e.prod_link}`}>
                            <h4 className='nombre_producto'>{e.prod_name} </h4>
                            <img src={require(`../../img/productos/${e.prod_src[0]}`).default} alt={e.prod_name} className='foto_producto'/>
                        </Link>
                            <div className='pagar_ahora'>
                                <p>S/.{e.prod_precio}</p>
                                <CarritoAdd className='carrito'/>
                            </div>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Productos;