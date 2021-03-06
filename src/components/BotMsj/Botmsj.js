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
            <button onClick={toggleMsj} className='btn_msj'><ImgMsj /></button>
            <div className={showMsj ? 'contacto_bots':'contacto_bots show'}>
                <Contacto className='contact_relative' />
            </div>
        </div>
    )
}

export default Botmsj;