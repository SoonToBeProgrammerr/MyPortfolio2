import React from 'react'
import './footer.css';
import iconR from '../assets/react.png';
import iconJ from '../assets/js.png';
import iconCss from '../assets/css.png';

export const Footer = () => {
    return (
        <footer className='footer'>
            <h1 className='name'>M<span className='dashRed'>-</span>Santiago<span className='dashRed'>.</span></h1>

            <p className='centerText'>Applications used:  <img src={iconR} alt="" className='footerLogo' /> <img src={iconJ} alt="" className='footerLogo' /> <img src={iconCss} alt="" className='footerLogo' /></p>

            <p className='rightText'>@2024 All right reserved</p>

        </footer>
    )
}

export default Footer