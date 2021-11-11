import {useState, useEffect} from "react";

import './slider.scss'

import slidefotos from './slideimg.json'

function Slider(){

    const [slideImg, setSlideImg] = useState(slidefotos[0].id);
    const [slideImgn, setSlideImgn] = useState(slidefotos[0].src);

    useEffect(() => {

        const timer = setInterval(() => {
            if(slideImg === 1){
                setSlideImg(2);
                setSlideImgn(slidefotos[1].src);
            }
            else if(slideImg === 2){
                setSlideImg(3);
                setSlideImgn(slidefotos[2].src);
            }
            else{
                setSlideImg(1);
                setSlideImgn(slidefotos[0].src);
            }
        }, 5000)

        return () => clearInterval(timer)

    });

    return(
        <div className='slider_container'>
            <div className='cont_img'>
                <img src={require(`../img/productos${slideImgn}`).default} className='slide_fotos' alt={slideImgn} ></img>
            </div>
                
            
        </div>
    )
}

export default Slider;