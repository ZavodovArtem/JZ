import React from "react";

import policy from '../components//img/footer/policy.svg'
import tele from '../components//img/footer/telegramm.svg'
import viber from '../components//img/footer/Viber.svg'
import VK from '../components//img/footer/VK.svg'
import watsApp from '../components/img/footer/watsApp.svg'
import line from '../components/img/body/LineEnd.svg'
import '../components/scss/footer.scss'

function Footer() {
    return(
        <>
        <img src={line} alt="" />
        <div className="footer">
            
            <div className="footerPolicy">
                <img src={policy} alt="" />
                <p>2024. Все права защищены</p>
            </div>
            <p>8-987-112-57-14</p>
            <p>AA-AA@mail.ru</p>
            <p>г.Нижний Ногвород</p>
            <div>
                <img className="footerMessage" src={tele} alt="" />
                <img className="footerMessage" src={viber} alt="" />
                <img className="footerMessage" src={VK} alt="" />
                <img className="footerMessage" src={watsApp} alt="" />
            </div>
        </div>
        </>
    )
}

export default Footer;