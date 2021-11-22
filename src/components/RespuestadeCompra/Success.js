import './success.scss'

function Success(){
    return(
        <div className='success_container'>
            <h5>Gracias por tu compra.</h5>
            <p>Por favor revisa tu Perfil para mas detalles de tu pedido.</p>
            <img src={require('../../img/respuestadecompra/perfil.jpg').default} className='perfil_foto' ></img>
            <div className='img_container' >
                <img src={require('../../img/respuestadecompra/msj.jpg').default} ></img>
            </div>
        </div>
    )
}

export default Success