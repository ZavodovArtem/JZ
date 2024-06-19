import React from "react";

import dressOne from '../components/img/body/dressOne.svg'
import dressTwo from '../components/img/body/dressTwo.svg'
import dressThree from '../components/img/body/dressThree.svg'
import dressFour from '../components/img/body/dressFour.svg'
import dressFive from '../components/img/body/dressFive.svg'
import dressSix from '../components/img/body/dressSix.svg'
import dressSeven from '../components/img/body/dressSeven.svg'
import dressEight from '../components/img/body/dressEight.svg'

import '../components/scss/bodySewing.scss'

function BodySewing () {
    return(
        <>
        <div className="BodySewingAll">   
            {/* <div className="BodySewingH"> */}
                <h1 className="BodySewingH fontRegular">Почему выбирают индивидуальный пошив?</h1>
            {/* </div> */}
            <div className="BodySewingGrid">
                <img src={dressOne} alt="" />
                <p className="BodySewingGridP fontRegular">Идеальная посадка</p>
                <img src={dressTwo} alt="" />
                <p className="BodySewingGridP fontRegular">Возможность выбора ткани</p>
                <img src={dressThree} alt="" />
                <p className="BodySewingGridP fontRegular">Уникальность дизайна</p>
                <img src={dressFour} alt="" />
                <p className="BodySewingGridP fontRegular">Высокое качество пошива</p>
                <img src={dressFive} alt="" />
                <p className="BodySewingGridP fontRegular">Возможность примерки изделия на разных этапах работы</p>
                <img src={dressSix} alt="" />
                <p className="BodySewingGridP fontRegular">Персональный подход к каждому клиенту</p>
                <img src={dressSeven} alt="" />
                <p className="BodySewingGridP fontRegular">Возможность выбрать модель из каталога или придумать собственную</p>
                <img src={dressEight} alt="" />
                <p className="BodySewingGridP fontRegular">Возможность получить консультацию специалиста по подбору фасона, цвета, фактуры ткани</p>
            </div>
        </div> 
        </>
    )
}

export default BodySewing