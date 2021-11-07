import { BrowserRouter as Router, Link,  HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";

import Cosa from './Cosa';

function Producto(props){

    return(
        <div>
            <h3>Hola {props.namess} </h3>

        </div>
    )
}

export default Producto; 