import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contenido from "../components/Contenido";
import Slider from "../components/Slider";

import './home.scss'

function Home(){
    return(
        <div className='home_container'>
            <Navbar />
            <div className='space'></div>
            <h2 className='prods'>PRODUCTOS</h2>
            <Slider />
            <Contenido />
            <Footer />
        </div>
    )
}

export default Home;