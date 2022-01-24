import React, { useState, useEffect } from "react";

import { Link, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoIosPeople} from 'react-icons/io';
import {GiArrowScope} from 'react-icons/gi';
import {RiHandHeartFill} from 'react-icons/ri';
import {MdConnectWithoutContact} from 'react-icons/md';

import { PrivacyPolicy } from "../policy/PrivacyPolicy";
import { TermsandConditions } from "../policy/TermsandConditions";

import Producto from "./Producto";
import Productos from "./Productos";

import "./guia.scss";
import Principal from "./Principal";

import Success from "../RespuestadeCompra/Success";
import Failure from "../RespuestadeCompra/Failure";
import Pending from "../RespuestadeCompra/Pending";
import Nosotros from "../Submenu/Nosotros";
import MisionYVision from "../Submenu/MisionYVision";
import Valores from "../Submenu/Valores";
import Contactanos from "../Submenu/Contactanos";

import aexportapi from '../api/aexportapi';
import DivLogimp from "../Login/DivLogimp";
import HomeLogin from "../Login/HomeLogin";
import Navbar from "../Navbar";
const URL_PRODUCTOS = "https://intikisaperu.com/oficial/api/productos.php";

function Guia() {
  const [toggleMenu, setToggleMenu] = useState("");

  function togglingMenu() {
    setToggleMenu(!toggleMenu);
  }

  const[ slider, setSlider] = useState(false)

  const [menuProductos, setMenuProductos] = useState(false);

  const [categoriasdeProds, setCategoriasDeProds] = useState([]);

  const toggleMenuProductos = () => {
    setMenuProductos(!menuProductos)
  }
  //productos api
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
            const indexx = productosarrayCat.findIndex(object => object.prodcategoria === e.prodcategoria );

            if(indexx === -1 ){
                productosarrayCat.push(e);
            }
        } )
        setCategoriasDeProds(productosarrayCat)
        
    }
  

  useEffect (async ()=>{
    await llamadaProductos();
    await categorias();
    if(window.location.href == 'http://localhost:3000/'){
      setSlider(true)
    }
    else{
      setSlider(false)
    }
    
  }, [])

  return (
    <div className="guia_container">
      <HashRouter>          
      <Navbar />          
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
          <Route path={'/policy'} element={<PrivacyPolicy />} >
            
          </Route>
          <Route path={'/termsandconditions'} element={<TermsandConditions />} >
            
          </Route>
          <Route path={'/login'} element={<HomeLogin />} >
            
          </Route>
          {categoriasdeProds.map((e) => (
            <Route
              
              path={`/${e.prodcategoriaurl}`}
              element={
                <Productos producs={e.prodnombre} url={e.prodcategoriaurl} categoriaid={e.prodcategoria} namess={productos} />
              }
            ></Route>
          ))}
          {productos.map((e) => (
              <Route
                exact
                path={`/${e.prodcategoriaurl}/${e.prodid}`}
                element={<Producto namess={e} pre={e.prodcategoriaurl} status={e.prodstatus} sku={e.prodsku} />}
              ></Route>
            )
          )}
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
