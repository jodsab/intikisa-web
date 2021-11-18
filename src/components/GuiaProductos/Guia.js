import React, { useState, useEffect } from "react";

import { Link, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';

import productos from "../../productos/productos.json";
import Producto from "./Producto";
import Productos from "./Productos";

import "./guia.scss";
import Error404 from "../Error404";
import SliderMenu from "../Slider/SliderMenu";
import Principal from "./Principal";

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
        </ul>
        {/* {
          slider ? <SliderMenu /> : false
        }
        <ul className='display_flex_productos_ul'>
        
        {productos.map((f) =>
            f.ctgria_productos.map((g) => (
              
                slider ?  <li className='cada_producto_li'><a href={`${window.location}#/${f.ctgria_tipo}/${g.prod_link}`} ><Principal namess={g} pre={f.ctgria_tipo} /></a></li> : false
              
            ))
        )
        }
        
        </ul> */}

        <Routes>
          <Route path={'/'} element={<Principal />}>
            
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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Guia;
