import React, { useState } from "react";

import { Link, HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import productos from "../../productos/productos.json";
import Producto from "./Producto";
import Productos from "./Productos";
import { FcHome } from "react-icons/fc";

import "./guia.scss";
import Error404 from "../Error404";

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
                      alt={e.ctgria_src}
                    />
                    <p className="title_p">{e.ctgria_tipo}</p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <Routes>
          <Route exact path={`/`}></Route>
          {productos.map((e) => (
            <Route
              exact path={`/${e.ctgria_tipo}`}
              element={
                <Productos producs={e.ctgria_productos} url={e.ctgria_tipo} />
              }
            ></Route>
          ))}
          {productos.map((f) =>
            f.ctgria_productos.map((g) => (
              <Route
                exact path={`/${f.ctgria_tipo}/${g.prod_link}`}
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
