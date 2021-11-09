import Axios from "axios";
import {useState} from 'react';

import {CgShoppingCart} from "react-icons/cg"

function CarritoGet(props){

    const [userid, SetUserId] = useState(1);
    const [productos, setProductos] = useState('');

    const getCart = () => {
        Axios.post(`http://localhost:4000/1/carrito/leyendo`,{userid: userid})
        .then((response) => {
            if(response){
                console.log(response);
                setProductos(response.data);
                if(response.data.length==0){
                    setProductos('VACIO')
                }

            }
            else{
                console.log(response);
            }
        })
    }

    return(
        <div>
            <CgShoppingCart className="rs_icon" onClick={getCart} />
            <p>PRODUCTOS: {productos}</p>
        </div>
    )
}

export default CarritoGet;