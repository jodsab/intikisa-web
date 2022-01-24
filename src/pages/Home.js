import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Guia from "../components/GuiaProductos/Guia";
import Botmsj from "../components/BotMsj/Botmsj";
import Izquierda from "../components/laterales/Izquierda";
import Derecha from "../components/laterales/Derecha";
import SliderMenu from "../components/Slider/SliderMenu";
import BarraNav from "../components/navigation/BarraNav";
import { Alertx } from "../components/alertas/Alertx";

import './home.scss'
import TelefonoCorreo from "../components/Telefono/TelefonoCorreo";

import { ToastContainer } from 'react-toastify';

function Home(){
    return(
        <div className='casa'>
            <Alertx />
            <div className='escritorio' >
                <TelefonoCorreo />     
            </div>
{/*             <div className='telefono'>
                <TelefonoCorreo  /> 
            </div> */}
            <Botmsj />

                
                <div className='space'></div>
                <Guia />
                <Footer />

            <ToastContainer 
                />
        </div>
        
    )
}

export default Home;