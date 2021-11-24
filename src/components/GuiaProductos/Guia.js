import React, { useState, useEffect } from "react";

import { Link, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoIosPeople} from 'react-icons/io';
import {GiArrowScope} from 'react-icons/gi';
import {RiHandHeartFill} from 'react-icons/ri';
import {MdConnectWithoutContact} from 'react-icons/md';

import productos from "../../productos/productos.json";
import Producto from "./Producto";
import Productos from "./Productos";

import "./guia.scss";
import Error404 from "../Error404";
import Principal from "./Principal";

import Success from "../RespuestadeCompra/Success";
import Failure from "../RespuestadeCompra/Failure";
import Pending from "../RespuestadeCompra/Pending";
import Nosotros from "../Submenu/Nosotros";
import MisionYVision from "../Submenu/MisionYVision";
import Valores from "../Submenu/Valores";
import Contactanos from "../Submenu/Contactanos";

function Guia() {
  const [toggleMenu, setToggleMenu] = useState("");

  function togglingMenu() {
    setToggleMenu(!toggleMenu);
  }

  const[ slider, setSlider] = useState(false)

  const [menuProductos, setMenuProductos] = useState(false);

  const toggleMenuProductos = () => {
    setMenuProductos(!menuProductos)
  }
  
  useEffect (()=>{
    if(window.location.href == 'http://localhost:3000/'){
      setSlider(true)
    }
    else{
      setSlider(false)
    }
    
  }, [])

  return (
    <div className="guia_container">
      <button className='btn_menu_productos' onClick={toggleMenuProductos} >
        <AiOutlineMenu />
      </button>
      <HashRouter>          
        <ul className={menuProductos ? "lista_tipos show" : "lista_tipos"}>
          <li className="div_tipos_container" onClick={toggleMenuProductos} >
            <Link to={'/'} >
              <div className="title_tipo">
                  <div className="title_tipo">
                    <p className="title_p"><AiOutlineHome /></p>
                  </div>
              </div>
            </Link>
          </li>
          {productos.map((e) => (
            <li
              key={e.id_ctgria}
              className="div_tipos_container"
              onClick={togglingMenu,toggleMenuProductos}
            >
              <div className="title_tipo">
                <Link to={`/${e.ctgria_tipo}`}>
                  <div className="title_tipo">
                  
                    <p className="title_p">{e.ctgria_tipo}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
          <div className='submenu_container'>
            <li className="div_tipos_container2" onClick={toggleMenuProductos} ><Link to='/nosotros' > <p><IoIosPeople/>NOSOTROS</p></Link></li>
            <li className="div_tipos_container2" onClick={toggleMenuProductos} ><Link to='/misionyvision' ><p><GiArrowScope/> MISION Y VISION</p></Link></li>
            <li className="div_tipos_container2" onClick={toggleMenuProductos} ><Link to='/valores' ><p> <RiHandHeartFill/>VALORES</p></Link></li>
            <li className="div_tipos_container2" onClick={toggleMenuProductos} ><Link to='/contactanos' ><p> <MdConnectWithoutContact/>CONTACTANOS</p></Link></li>
          </div>
        </ul>

        <Routes>
          <Route path={'/'} element={<Principal />}>
            
          </Route>
          <Route path={'/nosotros'} element={<Nosotros />}>
            
          </Route>
          <Route path={'/misionyvision'} element={<MisionYVision />}>
            
          </Route>
          <Route path={'/valores'} element={<Valores />}>
            
          </Route>
          <Route path={'/contactanos'} element={<Contactanos />}>
            
          </Route>
          {productos.map((e) => (
            <Route
              exact
              path={`/${e.ctgria_tipo}`}
              element={
                <Productos producs={e.ctgria_productos} url={e.ctgria_tipo} />
              }
            ></Route>
          ))}
          {productos.map((f) =>
            f.ctgria_productos.map((g) => (
              <Route
                exact
                path={`/${f.ctgria_tipo}/${g.prod_link}`}
                element={<Producto namess={g} pre={f.ctgria_tipo} />}
              ></Route>
            ))
          )}
          <Route component={Error404} />
          <Route
            path={'/compraexitosa'}
            element={<Success/>}
          >          
          </Route>
          <Route
            path={'/comprafallida'}
            element={<Failure/>}
          >          
          </Route>
          <Route
            path={'/comprapendiente'}
            element={<Pending/>}
          >          
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Guia;
