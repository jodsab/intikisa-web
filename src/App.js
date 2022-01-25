import './app.scss';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';

function App (){
    return(
        <div className='container'>
            <Home />
            <ToastContainer 
                />
        </div>
    )
}

export default App