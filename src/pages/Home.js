import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Guia from "../components/GuiaProductos/Guia";
import './home.scss'

function Home(){
    return(
        <div className='home_container'>
            <Navbar />
            <div className='space'></div>
            <h2 className='prods'>PRODUCTOS</h2>
            <Slider />
            <Guia />
            <Footer />
        </div>
    )
}

export default Home;