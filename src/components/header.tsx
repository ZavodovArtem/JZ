import React from "react";

import logo from '../components/img/header/logo.svg'
import needle from '../components/img/header/needle.svg'
// import stud from '../components/img/header/stud.svg'
import rectangle from '../components/img/header/rectangle.svg'
import JZ from '../components/img/header/JZ.svg'
// import hamb from '../components/img/header/gamburger.svg'
// import tele from '../components/img/footer/telegramm.svg'

import '../components/scss/header.scss'
import '../components/scss/AllBasicStyles.scss'
// import { useState } from 'react';

import Hamburger from '../components/hamburger'


function Header() {

    return (
        <>
            <div className="header">
                <div className="headerOneBlock">
                    <img src={logo} alt="" />
                    <div className="headerText">
                        <img className="headerTextNeedle fontMedium" src={needle} alt="" />
                        <p className="headerTextT fontMedium">Пошив на заказ</p>
                        <p className="headerTextT fontMedium">Цены</p>
                        <p className="headerTextT fontMedium">Философия</p>
                    </div>
                    <Hamburger />
                    
                </div>
                <div className="headerTwoBlock">
                    <p className="headerTwoBlockWhite fontRegular">Индивидуальный пошив</p>
                    <p className="headerTwoBlockBlack fontRegular">Юлия Заводова</p>
                    <img className="headerTwoBlockBack" src={rectangle} alt="" />
                    <img className="headerTwoBlockJZ" src={JZ} alt="" />
                </div>   
            </div> 
        </>
    )
}

export default Header;