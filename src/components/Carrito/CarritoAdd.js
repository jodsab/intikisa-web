import Axios from "axios";
import { useState } from 'react';

import {BsCartPlus} from 'react-icons/bs';

function CarritoAdd(){

    const [userid, SetUserId] = useState('1');
    const [producto, setProducto] = useState('golosina');

    const addCar = () => {
        Axios.post('http://localhost:4000/1/carrito/agregando',{producto: producto,user: userid})
        .then((response) => {
            if(response){
                console.log(response);
            }
        })
    }

    return(
        <div>
            <BsCartPlus className='carrito' onClick={addCar} />
        </div>
    )
}

export default CarritoAdd;