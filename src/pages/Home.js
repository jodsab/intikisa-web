import Footer from "../components/Footer";
import Categorias from '../components/Categorias.js'
import Guia from "../components/GuiaProductos/Guia";
import Botmsj from "../components/BotMsj/Botmsj";
import { Alertx } from "../components/alertas/Alertx";

import './home.scss'
import TelefonoCorreo from "../components/Telefono/TelefonoCorreo";

function Home(){
    return(
        <div className='casa'>
            <Alertx />
            <div className='escritorio' >
                <TelefonoCorreo />     
            </div>
            <Botmsj />
            <Guia />
            <Footer />


        </div>
        
    )
}

export default Home;