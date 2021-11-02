import './contenido.scss';
import productos from '../productos/productos.json'

function Contenido() {
    return(
        <div className='contenido_container'>
            <ul className='lista_productos'>
                {
                    productos.map((producto) => (
                        <li className='producto'>
                            <div className='cuadro_producto'>
                                <div className='img_producto'></div>
                                <div className='producto_info'>
                                    <h5 className='nombre_producto'>{producto.name}</h5>
                                    <button className='boton_producto'>ORDENAR DESDE</button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contenido;