import React, {useState, useRef} from 'react'

import {AiOutlineUser} from 'react-icons/ai';

import './homelogin.scss';

import {setCurrentUser, setPasswordUser,setIdUser,setEmailUser,setDireccionUser,setCelularUser} from '../Helpers/auth-helpers';

import swal from 'sweetalert';

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

    const alertaLogged = (nombre) => {
        swal({
            title: "Ingreso exitoso",
            text: `Bienvenido ${nombre}`,
            alert: "success",
            button: "Aceptar",
            timer: "3000"
        })
    }

    const alertRegistrado = () => {
        swal({
            title: "Resgitro exitoso",
            text: `Ahora ingresa con tu nuevo usuario`,
            alert: "success",
            button: "Aceptar",
            timer: "4000"
        })
    }

    const failRegister = () => {
        swal({
            title: "Resgitro Fallido",
            text: `Oops! Algo ha pasado, intenta con otro nombre de usuario`,
            alert: "error",
            button: "Aceptar",
            timer: "4000"
        })
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
            alertaLogged(respuestaJson.nombre)
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
        if(regRespuestaJson.registro == true ){
            alertRegistrado();
        } else{
            failRegister();
        }
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
                        <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Usuario" ref={refUsuario} required></input>
                        <input type="password" placeholder="Contraseña" ref={refClave} required></input>
                            {
                                error &&
                                <div className='error_space'>
                                    <p className='error_alert'>{error}</p>
                                </div>
                            }    
                            <input type='submit' className='btn_entrar' value='ENTRAR'></input>
                        <p id='noacc'>¿No tienes una cuenta?</p>
                        <button  onClick={changeRegister, changeLogin} className='btn_rgster' >Registrarse</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="registration_container">
                <div className="registration">
                    <p className='regster'>REGISTRATE GRATIS Y COMPRA FÁCIL</p>
                    <div >
                        <form onSubmit={handleRegister} className='registration_inputs'>
                        <label>Usuario:</label>
                        <input type="text" ref={refRegUsuario} required></input>
                        <label>Email:</label>
                        <input type="email" ref={refRegEmail} required></input>
                        <label>Contraseña:</label>
                        <input type="password" ref={refRegClave} required></input>
                        <label>Celular:</label>
                        <input type='text' ref={refRegCelular} required></input>
                        <label>Dirección de envío:</label>
                        <input type='text' ref={refRegDireccion} required></input>
                       <input type='submit' className='btn_login' value='REGISTRARME'></input>
                        <p className='alrgth'>¿Ya tienes una cuenta?</p>
                        <button onClick={changeRegister,changeLogin} className='btn_lgns' >Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default HomeLogin
