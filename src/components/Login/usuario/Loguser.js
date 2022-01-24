import {useRef} from 'react'

import './loguser.scss'

export function Loguser() {

    //LOGIN
    const refUsuario = useRef(null);
    const refClave = useRef(null);

    return (
        <div className='loguser_container'>
            <div className='formulario_container'>
                <div>
                    <p style={{'textAlign': 'center'}}>
                        Ingresa y comienza a comprar YA!
                    </p>
                </div>
                <div className='input_row'>
                    <label for='email'>Email:
                    </label>
                    <input type='email' name='email'>
                    </input>
                </div>
                <div className='input_row'>
                    <label for='password'>Contraseña:
                    </label>
                    <input type='password' name='password'>
                    </input>
                </div>
                <div className='submit_btn'>
                    <input type='submit' value='Entrar'>
                    </input>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
