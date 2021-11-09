import {useState} from 'react';

import './botmsj.scss';

function Botmsj(){

    const [showMsj, setShowMsj] = useState('');

    function toggleMsj(){
        setShowMsj(!showMsj);
    }

    return(
        <div className='botmsj_container'>
            <img src={require(`../../img/msj/msjbot.png`).default} className='msjbot' alt='bot mensaje' onClick={toggleMsj}></img>
            <div className={showMsj ? 'contacto_bot show':'contacto_bot'}>
                <h4 className='contacto_intikisa'>INTIKISA CONTACTO</h4>
                <img src={require(`../../img/navbar/logointikisa.png`).default} className='logo_inti'/>
                <label for='nombre'>Nombre: </label>
                <input type='text' name='nombre' />
                <label for='email'>Email: </label>
                <input type='email' name='email' />
                <label for='textarea'>Mensaje: </label>
                <textarea id='txtarea' name='textarea' rows='10' cols='14' placeholder='Hola me gustaría comprar...' ></textarea>
                <button type='submit' className='send'>ENVIAR</button>
            </div> 
        </div>
    )
}

export default Botmsj;