import {useState} from 'react';

function Menu(props){

    const [userName, setUserName] = useState('');

    const showName = (nombre) => {
        setUserName(nombre)
        props.connected = props.nombreUser;
    } 

    return(
        <h1>Hola {props.nombreUser} </h1>
    )
}

export default Menu;