import React from "react";

// import '../components/scss/bodyStep.scss'
import '../components/scss/bodyStep1.scss'

import triangleOne from '../components/img/body/triangleOne.svg'
import triangleTwo from '../components/img/body/triangleTwo.svg'
import triangleThree from '../components/img/body/triangleThree.svg'
import triangleFour from '../components/img/body/triangleFour.svg'
import ballFive from '../components/img/body/ballFive.svg'
import triangleSix from '../components/img/body/triangleSix.svg'
import triangleSeven from '../components/img/body/triangleSeven.svg'
import triangleEight from '../components/img/body/triangleEight.svg'

import LineOne from '../components/img/body/LineOne.svg'
import LineTwo from '../components/img/body/LineTwo.svg'
import LineThree from '../components/img/body/LineThree.svg'
// import LineFour from '../components/img/body/LineFour.svg'
// import LineFive from '../components/img/body/LineFive.svg'
import LineSix from '../components/img/body/LineSix.svg'
import LineSeven from '../components/img/body/LineSeven.svg'
import LineEight from '../components/img/body/LineEight.svg'
import LineEnd  from '../components/img/body/LineEnd.svg'


function BodyStep() {
    return(
        <>
        <div className="BodyStep">
            <div>
                <h1 className="BodyStepH fontRegular">Пошив одежды состоит из нескольких этапов:</h1>
            </div>
            <div className="BodyStepUp">
                    <img className="BodyStepUpOne" src={triangleOne} alt="" />
                    <div className="BodyStepUpOneDiv ">
                        <p className="fontRegular bodyStepSize">Консультация и снятие мерок</p>
                        <img src={LineOne} alt="" />
                    </div>
                    <img className="BodyStepUpTwo" src={triangleTwo} alt="" />
                    <div className="BodyStepUpTwoDiv">
                        <img src={LineTwo} alt="" />
                        <p className="fontRegular bodyStepSize">Подбор ткани и фурнитуры</p>
                    </div>  
                    <img className="BodyStepUpThree" src={triangleThree} alt="" />
                    <div className="BodyStepUpThreeDiv">
                        <p className="fontRegular bodyStepSize">Создание эскиза модели</p>
                        <img src={LineThree} alt="" />
                    </div>
                    <img className="BodyStepUpFour" src={triangleFour} alt="" />
            </div>
            <div className="BodyStepMiddle">
                    {/* <div className="BodyStepMiddleOne"> */}
                        <p className="fontRegular bodyStepSize">Раскрой ткани</p>
                        {/* <img src={LineFour} alt="" />
                    </div> */}
                    <img src={ballFive} alt="" />
                    {/* <div className="BodyStepMiddleTwo"> */}
                        <p className="fontRegular bodyStepSize">Пошив изделия</p>
                        {/* <img src={LineFive} alt="" />
                    </div> */}
            </div>
            <div className="BodyStepDown">
                    {/* <img src={triangleSix} alt="" /> */}
                    <div className="BodyStepDownOneDiv">
                        <p className="fontRegular bodyStepSize">Окончательная примерка <br />и сдача готового изделия</p>
                        {/* <img src={LineSix} alt="" /> */}
                        <img src={LineEight} alt="" />
                        {/* <img src={LineSeven} alt="" /> */}
                    </div>
                    {/* <img className="BodyStepDownOne" src={triangleSeven} alt="" /> */}
                    <img className="BodyStepDownOne" src={triangleEight} alt="" />
                    <div className="BodyStepDownTwoDiv">
                        <img src={LineSeven} alt="" />
                        {/* <img src={LineEight} alt="" /> */}
                        <p className="fontRegular bodyStepSize">Внесение корректировок</p>
                    </div>
                    {/* <img className="BodyStepDownTwo" src={triangleEight} alt="" /> */}
                    <img className="BodyStepDownTwo" src={triangleSeven} alt="" />
                    {/* <img src={triangleSix} alt="" /> */}
                    <div className="BodyStepDownThreeDiv">
                        <p className="fontRegular bodyStepSize">Примерка</p>
                        {/* <img src={LineEight} alt="" /> */}
                        <img src={LineSix} alt="" />
                    </div>
                    <img className="BodyStepDownThree" src={triangleSix} alt="" />
            </div>
            
            <img src={LineEnd} alt="" />
        </div>
        </>
    )
} 

export default BodyStep