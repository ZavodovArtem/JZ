// import React, { useState, useEffect } from 'react';
// import '../components/scss/testText.scss';

// const LetterDrawingAnimation: React.FC = () => {
//   const text = 'Ваш текст здесь';
//   const [drawnText, setDrawnText] = useState<string[]>([]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setDrawnText(drawnText => [...drawnText, text[index]]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 80); // Интервал между рисованием букв

//     return () => clearInterval(interval);
//   }, [text]);

//   return (
//     <div className="letter-drawing-container">
//       {drawnText.map((char, index) => (
//         <span key={index} className="draw">{char}</span>
//       ))}
//     </div>
//   );
// };

// export default LetterDrawingAnimation;




import React, { useEffect, useState } from "react";
// ... (остальные импорты)

import hammb from '../../img/header/gamburger.svg'

import '../../scss/hamburger.scss'
import '../../scss/AllBasicStyles.scss'
import '../../archive/scssArchive/hamburgerTestArchive.scss'

import teleg from '../../img/footer/telegramm.svg'
import vb from '../../img/footer/Viber.svg'
import vk from '../../img/footer/VK.svg'
import wa from '../../img/footer/watsApp.svg'



const HamburgerO: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [animationEnd, setAnimationEnd] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    useEffect(() => {
        if (menuVisible) {
            setTimeout(() => {
                setAnimationEnd (true);
            }, 300);
        } else{
            setAnimationEnd(false)
        }
    }, [menuVisible])

    // Функция для создания задержки перед отображением каждой буквы
    // const renderLettersWithDelay = (word: string, delay: number) => {
    //     return word.split('').map((letter, index) => (
    //         <span key={index} style={{ transitionDelay: `${index * delay}ms` }}>{letter}</span>
    //     ));
    // };

    const renderLettersWithDelay = (word: string, delay: number) => {
        return word.split('').map((letter, index) => (
            <span key={index} className="animated-letter" style={{ animationDelay: `${index * delay}ms` }}>
                {letter}
            </span>
        ));
    };


    return(
        <div className="hamburgerMain" onClick={toggleMenu}>
            {/* ... (остальная часть кода) */}
            <img className={`image hamburger ${menuVisible ? 'pop' : ''} ${animationEnd ? 'rotated' : '' }`} src={hammb} alt=""  />
            {menuVisible && (
                <div className="hamburgerMenu">
                    <ul className="hamburgerMenuUllll">
                        <li className="hamburgerMenuLi fontRegular">
                            {renderLettersWithDelay('8-987-112-57-14', 50)}
                        </li>
                        <li className="hamburgerMenuLi fontRegular">
                            {renderLettersWithDelay('AA-AA@mail.ru', 50)}
                        </li>
                        <li className="hamburgerMenuLi fontRegular">
                            {renderLettersWithDelay('г.Нижний Новгород', 50)}
                        </li>
                    </ul>
                    {/* ... (остальная часть кода) */}
                    <ul className="hamburgerMenuUl">
                        <li className="hamburgerMenuLi"><a href="https://web.telegram.org/a/#-1001110905904"><img src={teleg} alt="" /></a></li>
                        <li className="hamburgerMenuLi"><a href="#"><img src={vb} alt="" /></a></li>
                        <li className="hamburgerMenuLi"><a href="#"><img src={vk} alt="" /></a></li>
                        <li className="hamburgerMenuLi"><a href="#"><img src={wa} alt="" /></a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default HamburgerO;
