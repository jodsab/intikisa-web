import {useRef} from 'react'

import './logempresa.scss'

export function Logempresa() {
    return (
        <div className='logempresa_container'>
            <div className='formulario_container'>
                <div>
                    <p style={{'textAlign': 'center'}}>
                        Agrega tus productos a nuestra plataforma de manera fácil
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
