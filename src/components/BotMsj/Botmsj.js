import {useState} from 'react';

import ImgMsj from './ImgMsj';
import Contacto from './Contacto';

import './botmsj.scss';


function Botmsj(){

    const [showMsj, setShowMsj] = useState('');

    function toggleMsj(){
        setShowMsj(!showMsj);
    }

    return(
        <div className='botmsj_container'>
            <a href='https://intikisaperu.com/#/contactanos' className='wsp_msj' className='btn_msj' ><ImgMsj /></a>
            <a href='https://wa.me/51949959463' className='wsp_msj' target='_blank' ><img src={require('../../img/msj/wsp.png').default}></img></a>
        </div>
    )
}

export default Botmsj;