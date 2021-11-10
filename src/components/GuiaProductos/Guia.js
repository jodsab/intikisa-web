import React, { useState } from "react";

import { BrowserRouter as Router, Link, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import productos from "../../productos/productos.json";
import Producto from "./Producto";
import Productos from "./Productos";
import { FcHome } from "react-icons/fc";

import "./guia.scss";
import RutasProds from "../RutasProds/RutasProds";

function Guia() {
  const [toggleMenu, setToggleMenu] = useState("");

  function togglingMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="guia_container">
      <HashRouter>
        <div className="home">
          <Link to="/" className="inicio">
            <FcHome /> INICIO
          </Link>
        </div>
        <h3 className="prod_tipos_url">CATALOGO :</h3>
        <ul className={toggleMenu ? "lista_tipos" : "lista_tipos"}>
          {productos.map((e) => (
            <li
              key={e.id_ctgria}
              className="div_tipos_container"
              onClick={togglingMenu}
            >
              <div className="title_tipo">
                <Link to={`/${e.ctgria_tipo}`}>
                  <div className="title_tipo">
                    <img
                      src={require(`../../img/tipos/${e.ctgria_src}`).default}
                      className="background_tipo"
                    />
                    <p className="title_p">{e.ctgria_tipo}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <Routes>
          <Route path={`/`}></Route>
          {productos.map((e) => (
            <Route
              path={`/${e.ctgria_tipo}`}
              element={
                <Productos producs={e.ctgria_productos} url={e.ctgria_tipo} />
              }
            ></Route>
          ))}
          {productos.map((f) =>
            f.ctgria_productos.map((g) => (
              <Route
                path={`/${f.ctgria_tipo}/${g.prod_link}`}
                element={<Producto namess={g} pre={f.ctgria_tipo} />}
              ></Route>
            ))
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Guia;
