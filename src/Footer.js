import React from 'react' ;
import './Footer.css'
import footerImg from './img/logo.png' ;

function Footer() {
    return (
        <div className="footer d__flex align__items__center pz-10">
            <img src={footerImg} alt="" className="footer__img pointer" />
            <span className="copyright">© Developed and designed with love ❤️ by Hoshen Ishay . 2021 </span> 
            
        </div>
    )
}

export default Footer
