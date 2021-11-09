import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Guia from "../components/GuiaProductos/Guia";
import Barra from "../components/Barra/Barra";
import Botmsj from "../components/BotMsj/Botmsj";

import './home.scss'
import Contacto from "../components/BotMsj/Contacto";

function Home(){
    return(
        <div className='home_container'>
            <Botmsj />
            <Navbar />
            <div className='space'></div>
            <h2 className='prods'>PRODUCTOS</h2>
            <Barra />
            <Slider />
            <Guia />
            <div className='contact_cuerpo'>  
                <Contacto />
            </div>
            
            <Footer />
        </div>
    )
}

export default Home;