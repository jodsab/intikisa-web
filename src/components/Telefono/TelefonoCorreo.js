import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {BiTime} from 'react-icons/bi'

import './telefonocorreo.scss';

function TelefonoCorreo(){
    return(
        <div className='comunicate_container'>
            <div className='div_contact'>
                <AiOutlinePhone className='icon_msj' />
                <p className='msj_contacto'>Llámanos: +51 971 649 286</p>
            </div> 
            <div className='div_contact'>
                <AiOutlineMail className='icon_msj' />
                <p className='msj_contacto'>Email: intikisa.adm@gmail.com</p>
            </div>
            <div className='div_contact'> 
                <BiTime className='icon_msj' />
                <p className='msj_contacto'>Horario de Oficina: Lun-Vie: 09:00 am - 06:00 pm</p>
            </div>
            
        </div>
    )
}

export default TelefonoCorreo;