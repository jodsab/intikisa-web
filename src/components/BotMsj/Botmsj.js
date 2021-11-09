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
            <Contacto className={showMsj ? 'contacto_bot show':'contacto_bot'} />
        </div>
    )
}

export default Botmsj;