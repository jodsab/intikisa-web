import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa"
import './footer.scss';

function Footer() {
    return(
        <div className="footer_container">
         <div className="item1">
         <img src={require('../img/navbar/logointikisa.png').default} />
         </div>
         <div className='items_div'>
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
                <p>Siguenos</p>
            </div>
         </div>
         <div className="redes_sociales_container">
            <FaFacebook className="rs_icon"/>
            <SiInstagram className="rs_icon"/>
            <FaTiktok className="rs_icon"/>
         </div>       
         
        </div>
        /*<div>
            <FaFacebook />
        </div> */
    )
}

export default Footer;