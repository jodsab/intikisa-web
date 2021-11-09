import './imgmsj.scss'

function ImgMsj(){
    return(
        <div>
            <img src={require(`../../img/msj/msjbot.png`).default} className='img_contact'></img>
        </div>
    )
}

export default ImgMsj;