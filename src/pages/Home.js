import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Guia from "../components/GuiaProductos/Guia";
import Botmsj from "../components/BotMsj/Botmsj";

import './home.scss'
import Promo from "../components/Promos/Promo";
import TelefonoCorreo from "../components/Telefono/TelefonoCorreo";

import { ToastContainer } from 'react-toastify';

function Home(){
    return(
        <div className='casa'>
            <div className='escritorio' >
                <TelefonoCorreo />     
            </div>
            <Navbar />
            <div className='telefono'>
                <TelefonoCorreo  /> 
            </div>
            <div className='home_container'>
                <Botmsj />
                <div className='space'></div>

                <Promo />

                <Guia />
                <div className='contact_cuerpo'>  

                </div>
                <Footer />
            </div>
            <ToastContainer 
                />
        </div>
        
    )
}

export default Home;