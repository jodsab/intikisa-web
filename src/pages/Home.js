import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contenido from "../components/Contenido";
import Slider from "../components/Slider";

function Home(){
    return(
        <div>
            <Navbar />
            <Slider />
            <Contenido />
            <Footer />
        </div>
    )
}

export default Home;