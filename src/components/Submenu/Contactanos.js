import { useEffect } from 'react';

import './contactanos.scss'
import {BsFillPersonFill} from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {MdOutlineSubtitles} from 'react-icons/md';

import {FiPhoneCall} from 'react-icons/fi';
import {FaMapMarkedAlt} from 'react-icons/fa';
import {IoMdPaperPlane} from 'react-icons/io'


function Contactanos(){

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, []);

    return(
        <div className='contactanos_container'>
            <div className='cajita_contacto'>
                <div className='container_caja_contacto'>
                    <div className='informacion_div'>
                        <h3>INFORMACIÓN DE CONTACTO</h3>
                        <p>Somos una empresa que nace con el fin de brindar productos de calidad y que además contengan un sabor único y aporten beneficios a nuestra salud</p>
                        <div>
                            <div>
                                <p>
                                    <FiPhoneCall/>
                                    <p>
                                        +51 992 851 181
                                    </p>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <FaMapMarkedAlt/>
                                    <p>
                                        La Molina
                                    </p>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <IoMdPaperPlane/>
                                    <p>
                                        intikisa.adm@gmail.com
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='formulario_div'>
                        <h3>FORMULARIO</h3>
                        <p>Escribenos y te responderemos lo mas pronto posible</p>
                        <form>
                            <div className='fila_de_items'>
                                <div>
                                    <BsFillPersonFill />
                                    <input placeholder='Nombre' ></input>
                                </div>
                                <div>
                                    <FaHome />
                                    <input placeholder='Empresa'></input>
                                </div>
                                <div>
                                    <MdEmail />
                                    <input placeholder='Email' ></input>
                                </div>
                                <div>
                                    <MdOutlineSubtitles />
                                    <input placeholder='Asunto' ></input>
                                </div>
                                    <textarea placeholder='Mensaje'>
                                    </textarea>
                                <input type='submit' class='btn_enviar' value='ENVIAR EMAIL'></input>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactanos;