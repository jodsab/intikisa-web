import './imgmsj.scss'

function ImgMsj(){
    return(
        <div>
            <img src={require(`../../img/msj/msjbot.png`).default} className='img_contact' alt='msj bot' ></img>
        </div>
    )
}

export default ImgMsj;