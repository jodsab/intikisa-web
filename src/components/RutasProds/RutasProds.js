import { BrowserRouter as Router, Link, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Producto from "../GuiaProductos/Producto";
import Productos from "../GuiaProductos/Productos";
import productos from '../../productos/productos.json'

import './rutasprods.scss';

function RutasProds(){
    return(
        <div>
        <ul >
          {productos.map((e) => (
            <li key={e.id_ctgria} className="div_tipos_container" >
              <div className="title_tipo">
              <Link to={`/${e.ctgria_tipo}`}>
                  <div className="title_tipo">
                    <p className="title_p">{e.ctgria_tipo}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        </div>
    )
}

export default RutasProds;