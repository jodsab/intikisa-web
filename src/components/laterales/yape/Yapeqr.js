import yapeqr from '../../../img/delivery/yapefoto.jpg'
import './yape.scss';

export default function Yapeqr() {
    return (
        <div className='yape_container'>
                        <div>
                <p><strong>¿Cómo comprar en Yape?</strong></p>
                <p>1. Escanea el código QR desde tu aplicación.</p>
                <p>2. Agrega productos al carrito de compras.</p>
                <p>3. Yapea el saldo total y envia un mensaje por 
                    Whatsapp al 949 959 463 y listo, en 2 días tendrás 
                    tus productos en casa.</p>
            </div>
            <img src={yapeqr} />
        </div>
    )
}
