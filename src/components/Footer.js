import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa"
import './footer.scss';
import footeroptions from './footer_container.json';

function Footer() {
    return(
        <div className="footer_container">
         <div className="logo_footer">
         <img src={require('../img/navbar/logointikisa.png').default} />
         </div>
         <div className='options_div'>
         <ul className='options_list'>
                    {
                        footeroptions.map((item) => (
                             <li key={item.id}>
                                <h1>{item.section}</h1>
                                <h2>{item.half_border}</h2>
                                <p>{item.sub_section}</p>
                                <p>{item.sub_section2}</p>
                                <p>{item.sub_section3}</p>
                                <p>{item.sub_section4}</p>
                             </li>
                        ))
                        }
                    </ul>
        </div>
        <div className="redes_sociales_container">
            <p>Siguenos</p>
            <FaFacebook className="rs_icon"/>
            <SiInstagram className="rs_icon"/>
            <FaTiktok className="rs_icon"/>
            <p>Copyright © Intikisa Corp. Todos los derechos reservados 2021.</p>
         </div>       
        </div>
        /*<div>
            <FaFacebook />
        </div> */
    )
}

export default Footer;