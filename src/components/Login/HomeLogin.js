import React, {useState, useRef} from 'react'

import {AiOutlineUser} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa'
import {MdBusiness} from 'react-icons/md'

import './homelogin.scss';

import {setCurrentUser, setPasswordUser,setIdUser,setEmailUser,setDireccionUser,setCelularUser} from '../Helpers/auth-helpers';
import { Loguser } from './usuario/Loguser';
import { Reguser } from './usuario/Reguser';
import { Logempresa } from './empresario/Logempresa';
import { Regempresa } from './empresario/Regempresa';

//LOGIN SETUP
const URL_LOGIN = "https://intikisaperu.com/oficial/login.php";

const enviarData = async (url, data) => {

    const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await resp.json();

    return json;
}

//REGISTER SETUP
const URL_REGISTER = "https://intikisaperu.com/oficial/registrar.php";

const enviarRegData = async (url, data) => {
    
    const regResp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const regjson = await regResp.json();

    return regjson;

}

function HomeLogin(props) {

    const gettingDate = () => {
        const d = new Date();

        var fechita = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;

        return fechita
    } 

    //LOGIN
    const [error, setError] = useState(null);

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin = async (e) => {

        e.preventDefault();

        const data = {
            "user_nombre": refUsuario.current.value,
            "user_password": refClave.current.value
        }

        const respuestaJson = await enviarData(URL_LOGIN, data);
        
        if(respuestaJson.conectado){
            props.acceder(respuestaJson.conectado)
            props.userName(respuestaJson.nombre)
            setCurrentUser(data.user_nombre)
            setPasswordUser(data.user_password)
            setIdUser(respuestaJson.usuario)
            setEmailUser(respuestaJson.email)
            setDireccionUser(respuestaJson.direccion)
            setCelularUser(respuestaJson.celular)
        }
        setError(respuestaJson.error)
    }

    //REGISTER
    const refRegUsuario = useRef(null);
    const refRegEmail = useRef(null);
    const refRegClave = useRef(null);
    const refRegCelular = useRef(null);
    const refRegDireccion = useRef(null);

    const handleRegister = async () => {
        const regdata = {
            "user_fecha": gettingDate(),
            "user_nombre": refRegUsuario.current.value,
            "user_email": refRegEmail.current.value,
            "user_password": refRegClave.current.value,
            "user_celular": refRegCelular.current.value,
            "user_direccion": refRegDireccion.current.value
        }
        console.log(regdata);
        const regRespuestaJson = await enviarRegData(URL_REGISTER, regdata);
        console.log("respuesta desde el evento register", regRespuestaJson);
        console.log(regRespuestaJson.registro);

        changeLogin()
        changeRegister()
    }

    //DIVS DE LOGIN Y REGISTER
    const [ divReg, setDivReg ] = useState(false);
    const [ divLog, setDivLog ] = useState(true);

    const [ isLogged, setIsLogged ] = useState(false);

    function changeLogin(){
        setDivLog(!divLog)
    }

    function changeRegister(){
        setDivReg(!divReg)
    }

    const [welcomemsj, setWelcomemsj] = useState('');

    const logout = () => {
        setIsLogged(false);

    }

    const [ showLogMenu, setShowLogMenu ] = useState(true);

    const [modoEmpresa, setModoEmpresa] = useState(true);
    const [divlogUser, setDivlogUser] = useState(true);
    const [divlogEmp, setDivlogEmp] = useState(true);

    return(
        <div className='homelogin_container'>
            <div className='btns_tipo_user_empresa'>
                <button className={modoEmpresa ? 'btn_top active': 'btn_top'} onClick={()=>{setModoEmpresa(true)}}>
                    <FaRegUser />    
                    <p>            
                        Usuario
                    </p>            
                </button>
                <button className={modoEmpresa ? 'btn_top': 'btn_top apagado'} onClick={()=>{setModoEmpresa(false)}}>
                    <MdBusiness />                
                    <p>            
                        Empresa
                    </p> 
                </button>
            </div>

            <div className='btns_login_registro'>
                {
                    modoEmpresa ?
                    <div className='espacio_flex_column'>
                        <div className='btns_flex'>
                            <button className={divlogUser ? 'btn btn_login_usuario active' : 'btn btn_login_usuario'} onClick={()=>{setDivlogUser(true)}}>
                                Login
                            </button>
                            <button className={divlogUser ? 'btn btn_registro_usuario' : 'btn btn_registro_usuario apagado'} onClick={()=>{setDivlogUser(false)}}>
                                Registro
                            </button>
                        </div>
                        <div className='cuadro_grid'>
                            <div className='flex_column'>
                                <img className='foto_cuadro' src={require('../../img/usuario.jpg').default} alt='fotousuario' />
                                <p className='msj'>
                                    Accede y compra nuestros productos obteniendo descuentos exclusivos.
                                </p>
                            </div>
                            {
                                divlogUser ? <Loguser />:<Reguser />
                            }
                        </div>
                    </div>
                    :
                    <div className='espacio_flex_column'>
                        <div className='btns_flex'>
                            <button className={divlogEmp ? 'btn btn_login_empresa active':'btn btn_login_empresa'} onClick={()=>{setDivlogEmp(true)}}>
                                Login
                            </button>
                            <button className={divlogEmp ? 'btn btn_registro_empresa':'btn btn_registro_empresa apagado'} onClick={()=>{setDivlogEmp(false)}}>
                                Registro
                            </button>
                        </div>
                        <div className='cuadro_grid'>
                            <div>
                                <img className='foto_cuadro' src={require('../../img/empresa.jpg').default} alt='fotoempresa' />
                                <p className='msj'>
                                    Únete a nosotros y vende nuestros productos, y los tuyos también, trabajemos juntos.
                                </p>
                            </div>
                            {
                                divlogEmp ? <Logempresa />:<Regempresa />
                            }
                        </div>
                    </div>
                }
            </div>            
        </div>
    )
    
}

export default HomeLogin
