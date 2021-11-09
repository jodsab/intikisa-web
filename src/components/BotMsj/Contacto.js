import './contacto.scss'

function Contacto(){
    return(
        <div className='contacto_bot'>
            <div className='contacto_sup'>
                <h4 className='contacto_intikisa'>INTIKISA CONTACTO</h4>
                <img src={require(`../../img/navbar/logointikisa.png`).default} className='logo_inti'/>
            </div>
            <div className='contacto_sub'>
                <label for='nombre'>Nombre: </label>
                <input type='text' name='nombre' />
                <label for='email'>Email: </label>
                <input type='email' name='email' />
                <label for='textarea'>Mensaje: </label>
                <textarea id='txtarea' name='textarea'  placeholder='Hola me gustaría comprar...' ></textarea>
                <button type='submit' className='send'>ENVIAR</button>
            </div>            
    </div> 
    )
}

export default Contacto