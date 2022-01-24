import Yapeqr from "./yape/Yapeqr"

export default function Derecha() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign:'center'}}>
            <div>
                <p><strong>¿Cómo comprar en Yape?</strong></p>
                <p>1. Escanea el código QR desde tu aplicación.</p>
                <p>2. Agrega productos al carrito de compras.</p>
                <p>3. Yapea el saldo total y envia un mensaje por 
                    Whatsapp al 949 959 463 y listo, en 2 días tendrás 
                    tus productos en casa.</p>
            </div>
            <Yapeqr />
        </div>
    )
}
