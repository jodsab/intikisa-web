import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Guia from "../components/GuiaProductos/Guia";
import Botmsj from "../components/BotMsj/Botmsj";

import './home.scss'
import Contacto from "../components/BotMsj/Contacto";
import Promo from "../components/Promos/Promo";
import TelefonoCorreo from "../components/Telefono/TelefonoCorreo";

function Home(){
    return(
        <div className='casa'>
            <TelefonoCorreo />                
            <Navbar />
            <div className='home_container'>
                <Botmsj />
                <div className='space'></div>
                <h2 className='prods'>BIENVENIDO A INTIKISA</h2>
                <Promo />
                <Slider />
                <Guia />
                <div className='contact_cuerpo'>  
                    <Contacto />
                </div>
                <Footer />
            </div>
        </div>
        
    )
}

export default Home;