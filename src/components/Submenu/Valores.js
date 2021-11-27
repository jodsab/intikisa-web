import {useEffect} from 'react';

function Valores(){

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, []);

    return(
        <div>
            <h3>Valores</h3>
        </div>
    )
}

export default Valores;