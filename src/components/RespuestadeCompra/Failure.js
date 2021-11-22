import './failure.scss';

function Failure(){
    return(
        <div className='failure_container' >
            <h5>Oops :(, algo pasó con tu compra.</h5>
            <p>Algo ha pasado, pero no te preocupes, si necesitas ayuda con tu compra por favor comunícate con nosotros para mas detalles de compra.</p>
            <div className='img_container' >
                <img src={require('../../img/respuestadecompra/msj.jpg').default} ></img>
            </div>
        </div>
    )
}

export default Failure