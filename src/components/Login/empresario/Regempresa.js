import {useRef} from 'react'

import './regempresa.scss'

export function Regempresa() {
    return (
        <div className="regempresa_container">
            <div className='formulario_container'>
                <div>
                    <p style={{'textAlign': 'center'}}>
                        Afíliate y entérate cómo trabajar con nosotros
                    </p>
                </div>
                <div className='input_row'>
                    <label for='nombre'>Empresa:
                    </label>
                    <input type='text' name='nombre'>
                    </input>
                </div>
                <div className='input_row'>
                    <label for='email'>Email empresarial:
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
                    <label for='casa'>Ubiación de envío:
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
                <div className='input_row'>
                    <label for='password'>Confirmar contraseña:
                    </label>
                    <input type='password' name='password'>
                    </input>
                </div>
                <div className='submit_btn'>
                    <input type='submit' value='Registrar empresa'>
                    </input>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
