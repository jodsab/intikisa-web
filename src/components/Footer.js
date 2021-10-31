import { FaFacebook } from "react-icons/fa";

function Footer() {
    return(
        <div className="footer_container">
         <div className="item1">
         <img src={require('../img/navbar/logointikisa.png').default} />
         </div>
         <div className="item2">
         <h1>Tiendas y Servicios</h1>
         <p>Zonas de reparto</p>
         </div>
         <div className="item3">
         <h1>Atención al cliente</h1>
         <p>Contáctanos</p>
         </div>
         <div className="item4">
         <h1>Políticas y terminos</h1>
         </div>
         <div className="item5">
         <p>Siguenos</p>
        <FaFacebook />
         </div>
        </div>
        /*<div>
            <FaFacebook />
        </div> */
    )
}

export default Footer;