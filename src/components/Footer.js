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
         <div>
         <img src={require('../img/navbar/logointikisa.png').default} className="logo_footer" />
         </div>
         <div className='options_div'>
         <ul className='options_list'>
                    {
                        footeroptions.map((item) => (
                             <li key={item.id}>
                                <h1>{item.section}</h1>
                                <h2></h2>
                                <p><a href="" target="_blank">{item.sub_section}</a></p>
                                <p><a href="" target="_blank">{item.sub_section2}</a></p>
                                <p><a href="" target="_blank">{item.sub_section3}</a></p>
                                <p>{item.sub_section4}</p>
                                <p>{item.sub_section5}</p> 
                             </li> 
                        ))
                        
                        }      
                            <li>
                              <h1>Nuestras redes</h1>
                              <h2></h2>
                              <div className="redes_sociales_container">
                               <a href="https://www.facebook.com" target="_blank" >
                               <FaFacebook className="rs_icon"/>
                               </a>
                               <a href="https://www.instagram.com" target="_blank">
                               <SiInstagram className="rs_icon"/>
                               </a>
                               <a href="https://www.tiktok.com" target="_blank">
                               <FaTiktok className="rs_icon"/>
                               </a>
                               </div> 
                            </li>                  
         </ul>
        </div>
        <div className="bottom_footer_container" >
         <div className="derechos_container">
            <span> © 2021 Intikisa Corp. </span> 
            <span>Todos los derechos reservados.</span>
         </div> 
        <div className="metodos_pago">
         <RiVisaFill className="rs_icon" />
         <FaCcPaypal className="rs_icon"/>
         <FaCcMastercard className="rs_icon"/>
         </div>
        </div>
        </div>   
    )
}

export default Footer;
