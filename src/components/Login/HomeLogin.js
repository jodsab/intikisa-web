import React, {useState} from 'react'
import Axios from 'axios';

import {AiOutlineUser} from 'react-icons/ai';

import './homelogin.scss';

function HomeLogin() {

    const [ divReg, setDivReg ] = useState(false);
    const [ divLog, setDivLog ] = useState(true);

    const [ isLogged, setIsLogged ] = useState(false);

    function changeLogin(){
        setDivLog(!divLog)
    }

    function changeRegister(){
        setDivReg(!divReg)
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [welcomemsj, setWelcomemsj] = useState('');

    const login = () => {
        Axios.post('http://localhost:4000/login', {username: username, password: password})
        .then((response) => {
            if(response.data.length >= 1){
                console.log(response.data[0].user_name);
                setWelcomemsj(`${response.data[0].user_name}`);
                setIsLogged(true);
                changeLogin();
            }
            else{
                console.log('Usuario no existe')

            }
        });
    }

    const [userNameReg, setUsernameReg] = useState('');
    const [userEmailReg, setUserEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('http://localhost:4000/register', {username: userNameReg , email: userEmailReg,password: passwordReg} )
            .then((response) => {
                console.log(response)
                setDivReg(false);
                setDivLog(true);

            }) 
    }

    const logout = () => {
        setIsLogged(false);

    }

    const [ showLogMenu, setShowLogMenu ] = useState(true);

    const [ accedeMsj, setaccedeMsj ] = useState('Accede con tu cuenta');

    const [ showBtnLog, setShowBtnLog ] = useState(true);

    const hideBtnLog = () => {
        setShowBtnLog(!showBtnLog)
    }

    const toggleLoginMenu = () => {
        setShowLogMenu(!showLogMenu)
    }

    const deleteAccedeMsj = () => {
        setaccedeMsj('');
    }


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
                        <input type="text" placeholder="Username" onChange={(e) => {
                            setUsername(e.target.value);
                        }} required></input>
                        <input type="password" placeholder="Password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} required></input>
                        <button onClick={login}>Entrar</button>
                        <p>¿No tienes una cuenta?</p>
                        <button onClick={changeRegister, changeLogin}>Registrarse</button>
                    </div>
                    
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="registration_container">
                <div className="registration">
                    <h4>Registrarme</h4>
                    <div className='registration_inputs'>
                        <label>Usuario</label>
                        <input type="text" onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }} required></input>
                        <label>Email</label>
                        <input type="email" onChange={(e) => {
                            setUserEmailReg(e.target.value);
                        }} required></input>
                        <label>Contraseña</label>
                        <input type="password" onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }} required></input>
                        <button onClick={register}>Registrarse</button>
                        <p>¿Ya tienes una cuenta?</p>
                        <button onClick={changeRegister, changeLogin}>Ingresar</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default HomeLogin
