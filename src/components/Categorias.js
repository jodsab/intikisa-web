import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import aexportapi from '../api/aexportapi';

import {IoIosArrowDown} from 'react-icons/io'

import './categorias.scss';

const URL_CATPROD = "https://intikisaperu.com/oficial/api/catprod.php";

export function Categorias(props) {

    const [showDiv, setShowDiv] = useState(false);

    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    
    const fetchCatProd = async () => {

        const data = {
            "user_nombre": "admin",
        }

        const respuestaJson = await aexportapi.callCatProd(URL_CATPROD, data);
        console.log(respuestaJson);

        const auxcateg = [];
        
        respuestaJson.map((e) => {
            const o = auxcateg.findIndex(f => {
                return f.prodidcategoria === e.prodidcategoria;
            })

            if(o == -1 ){
                auxcateg.push(e)
            }
        })

        console.log(auxcateg);
        setCategorias(auxcateg)

        setProductos(respuestaJson)
        return respuestaJson;
    }

    useEffect(async () => {
        await fetchCatProd();
    }, []);

    return (
        <div className='categorias_container'>
            <ul className='lista_categorias' onMouseEnter={()=>{setShowDiv(!showDiv)}} onMouseLeave={()=>{setShowDiv(!showDiv)}}>
            {
                categorias.map((e) => <li className='item' >
                        <Link to={`/${e.prodcategoriaurl}`} className='div_item' onClick={props.cerrarMenu} >
                            {e.prodcategoria}<IoIosArrowDown/> 
                        </Link>
                        <ul className='productos'>
                            {
                                productos.map((f) => 
                                    <li className='sublista'>
                                        <Link to={`/${e.prodcategoriaurl}/${f.prodid}`} className='sublista' onClick={props.cerrarMenu}>
                                            {
                                                f.prodidcategoria === e.prodidcategoria ? <p className={showDiv ? 'subitem show':'subitem'}>{f.prodnombre}</p> : false
                                            }
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default Categorias;