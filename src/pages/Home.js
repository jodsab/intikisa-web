import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Guia from "../components/GuiaProductos/Guia";
import Barra from "../components/Barra/Barra";
import Botmsj from "../components/BotMsj/Botmsj";

import './home.scss'

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
            <Footer />
        </div>
    )
}

export default Home;