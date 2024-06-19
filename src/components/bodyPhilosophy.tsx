import React from "react";  

import imgPhilosophy from '../components/img/body/imgPhilosophy.png'

import '../components/scss/bodyPhilosophy.scss'

function BodyPhilosophy () {
    return(
        <>
            <div className="BodyPhilosophyBackground">
                <div className="BodyPhilosophy">
                    <div className="bodyPhilosophyH">
                        <h1 className="bodyPhilosophyH fontRegular">Индивидуальный пошив - философия красоты и комфорта</h1>
                    </div>
                    <div className="bodyPhilosophyMain">
                        <img src={imgPhilosophy} alt="" />
                        <p className="bodyPhilosophyMainP fontRegular">
                            Философия индивидуального пошива основана на том, 
                            что каждый человек уникален и имеет свои особенности фигуры, 
                            цвета кожи, стиля и предпочтений. Поэтому одежда, 
                            которую мы носим, должна быть не только красивой, 
                            но и соответствовать нашим потребностям и желаниям.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BodyPhilosophy