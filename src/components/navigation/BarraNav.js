import './barranav.scss'

import {TiArrowSortedDown} from 'react-icons/ti'

export default function BarraNav() {
    return (
        <div className='barranav_container'>
            <ul className='barranav_ul'>
                <li>CATEGORIAS <TiArrowSortedDown className='icon' /></li>
                <li>ACCESORIOS <TiArrowSortedDown className='icon' /></li>
                <li>BLOG</li>
            </ul>
        </div>
    )
}
