import React, {useState, useRef} from 'react'

import {AiOutlineUser} from 'react-icons/ai';

import './homelogin.scss';

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
    console.log(json);

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
    console.log(regResp);
    const regjson = await regResp.json();
    console.log(regjson);

}

function HomeLogin(props) {

    //LOGIN
    const [error, setError] = useState(null);

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin = async () => {
        const data = {
            "user_nombre": refUsuario.current.value,
            "user_password": refClave.current.value
        }

        const respuestaJson = await enviarData(URL_LOGIN, data);
        console.log("respuesta desde el evento login", respuestaJson.conectado);

        props.acceder(respuestaJson.conectado)
        setError(respuestaJson.error)
        props.userName(respuestaJson.nombre)
    }

    //REGISTER
    const refRegUsuario = useRef(null);
    const refRegEmail = useRef(null);
    const refRegClave = useRef(null);

    const handleRegister = async () => {
        const regdata = {
            "user_nombre": refRegUsuario.current.value,
            "user_email": refRegEmail.current.value,
            "user_password": refRegClave.current.value
        }
        console.log(regdata);
        const regRespuestaJson = await enviarRegData(URL_REGISTER, regdata);
        console.log("respuesta desde el evento register", regRespuestaJson);

        console.log(regRespuestaJson.registro);
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

    if( isLogged && divReg === false && divLog === false ){
        return (
            <div className='welcome_container'>
                <div className='user-space'>
                    <div className='user'>
                        <AiOutlineUser />
                        <strong>{welcomemsj}</strong>
                    </div>
                    
                    <div className='user-display'>
                        <p>Productos</p>
                        <button onClick={logout} className='logout-btn'>Cerrar Sesión</button>
                    </div>
                </div>
                
            </div> 
        )
    }
    else if( isLogged === false && divReg=== false && divLog === true ){
        return (
            <div className="login_container">
                <div className="login">
                    <div className={showLogMenu ? 'login_inputs showlogmenu': 'login_inputs'}>
                        <p id='entrar'>Entrar</p>
                        <input type="text" placeholder="Username" ref={refUsuario} required></input>
                        <input type="password" placeholder="Password" ref={refClave} required></input>
                            {
                                error &&
                                <div className='error_space'>
                                    <p className='error_alert'>{error}</p>
                                </div>
                            }    
                        <button onClick={handleLogin} className='btn_entrar' >Entrar</button>
                        <p id='noacc'>¿No tienes una cuenta?</p>
                        <button  onClick={changeRegister, changeLogin} className='btn_rgster' >Registrarse</button>
                    </div>
                    
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="registration_container">
                <div className="registration">
                    <p className='regster'>Registrarme</p>
                    <div className='registration_inputs'>
                        <label>Usuario:</label>
                        <input type="text" ref={refRegUsuario} required></input>
                        <label>Email:</label>
                        <input type="email" ref={refRegEmail} required></input>
                        <label>Contraseña:</label>
                        <input type="password" ref={refRegClave} required></input>
                        <button onClick={handleRegister} className='btn_login'>Registrarse</button>
                        <p className='alrgth'>¿Ya tienes una cuenta?</p>
                        <button onClick={changeRegister,changeLogin} className='btn_lgns' >Ingresar</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default HomeLogin
