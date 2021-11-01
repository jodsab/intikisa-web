import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal} from "react-icons/fa";
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
                                <h2></h2>
                                <p><a href="">{item.sub_section}</a></p>
                                <p><a href="">{item.sub_section2}</a></p>
                                <p><a href="">{item.sub_section3}</a></p>
                                <p><a href="">{item.sub_section4}</a></p>
                             </li> 
                        ))
                        
                        }
                        <div className="redes_sociales_container">
                        <a href="https://www.facebook.com">
                        <FaFacebook className="rs_icon"/>
                        </a>
                        <a href="https://www.instagram.com">
                        <SiInstagram className="rs_icon"/>
                        </a>
                        <a href="https://www.tiktok.com">
                        <FaTiktok className="rs_icon"/>
                        </a>
                       </div> 
         </ul>
 
        </div>
        <div className="bottom_footer_container">
        <div className="derechos_container">
            <p>Copyright © Intikisa Corp. 2021 - Todos los derechos reservados.</p>
         </div>
         <div className="metodos_pago_container">
         <RiVisaFill className="rs_icon" />
         <FaCcMastercard className="rs_icon"/>
         <FaCcPaypal className="rs_icon"/>
             </div>  
             </div>     
        </div>
    )
}

export default Footer;