import {useRef} from 'react'

import './reguser.scss'

export function Reguser() {

    //REGISTER
    const refRegUsuario = useRef(null);
    const refRegEmail = useRef(null);
    const refRegClave = useRef(null);
    const refRegCelular = useRef(null);
    const refRegDireccion = useRef(null);

    return (
        <div className="reguser_container">
            <div className='formulario_container'>
                <div>
                    <p style={{'textAlign': 'center'}}>
                        Regístrate y comienza a comprar con descuentos
                    </p>
                </div>
                <div className='input_row'>
                    <label for='nombre'>Nombre:
                    </label>
                    <input type='text' name='nombre'>
                    </input>
                </div>
                <div className='input_row'>
                    <label for='email'>Email:
                    </label>
                    <input type='email' name='email'>
                    </input>
                </div>
                <div className='input_row'>
                    <label for='celular'>Celular:
                    </label>
                    <input type='tel' name='celular'>
                    </input>
                </div>
                <div className='input_row'>
                    <label for='casa'>Direccion:
                    </label>
                    <input type='text' name='casa'>
                    </input>
                </div>
                <div className='input_row'>
                    <label for='password'>Contraseña:
                    </label>
                    <input type='password' name='password'>
                    </input>
                </div>
                <div className='submit_btn'>
                    <input type='submit' value='Registrarme'>
                    </input>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
