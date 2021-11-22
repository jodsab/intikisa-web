import './pending.scss';

function Pending(){
    return(
        <div className='pending_container'>
            <h5>Gracias por tu compra.</h5>
            <p>El pago aún está pendiente, si necesitas ayuda e información por favor comúnicate con nosotros.</p>
            <div className='img_container' >
                <img src={require('../../img/respuestadecompra/msj.jpg').default} ></img>
            </div>
        </div>
    )
}

export default Pending