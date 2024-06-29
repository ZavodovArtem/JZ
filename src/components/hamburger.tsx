import React, { useEffect, useState } from "react";

import hammb from '../components/img/header/gamburger.svg'

import '../components/scss/hamburger.scss'
import '../components/scss/AllBasicStyles.scss'

import teleg from '../components/img/footer/telegramm.svg'
import vb from '../components/img/footer/Viber.svg'
import vk from '../components/img/footer/VK.svg'
import wa from '../components/img/footer/watsApp.svg'

const Hamburger: React.FC = () => {
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


    const renderLetterWithDelay = (word: string, delay: number) => {
        return word.split('').map((letter, index) => (
            <span key={index} className="animated-letter" style={{animationDelay: `${index * delay}ms`}}>
                {letter}
            </span>
        ))
    }

    
    return(
        <div className="hamburgerMain" onClick={toggleMenu} >
            <img className={`image hamburger ${menuVisible ? 'pop' : ''} ${animationEnd ? 'rotated' : '' }`} src={hammb} alt=""  />
            {menuVisible && (
                <div className="hamburgerMenu">
                    <ul className="hamburgerMenuUllll">
                        {/* <li className="hamburgerMenuLi fontRegular">8-987-112-57-14</li> */}
                        <li className="hamburgerMenuLi fontRegular ">
                            {/* <span className="testLi">8-987-1</span>
                            <span>12-57-14</span> */}
                            {renderLetterWithDelay('8-987-112-57-14', 50)}
                        </li>
                        {/* <li className="hamburgerMenuLi fontRegular">AA-AA@mail.ru</li> */}
                        <li className="hamburgerMenuLi fontRegular">
                            {/* <span className="testLi">AA-AA@m</span>
                            <span>ail.ru</span> */}
                             {renderLetterWithDelay('AA-AA@mail.ru', 50)}
                        </li>
                        {/* <li className="hamburgerMenuLi fontRegular">г.Нижний Ногвород</li> */}
                        <li className="hamburgerMenuLi fontRegular">
                            {/* <span className="testLi">г.Нижний Нов</span>
                            <span>город</span> */}
                            {renderLetterWithDelay('г.Нижний Новгород', 50)}
                        </li>
                    </ul>
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

export default Hamburger