import React, { useEffect, useState } from "react";

import hammb from '../components/img/header/gamburger.svg'

import '../components/scss/hamburger.scss'

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
    
    return(
        <div className="hamburgerMain" onClick={toggleMenu} >
            <img className={`image hamburger ${menuVisible ? 'pop' : ''} ${animationEnd ? 'rotated' : '' }`} src={hammb} alt=""  />
            {menuVisible && (
                <div className="hamburgerMenu">
                    <ul className="hamburgerMenuUl">
                        <li className="hamburgerMenuLi"><a href="#">ddddddd</a></li>
                        <li className="hamburgerMenuLi"><a href="#">ddddddffff</a></li>
                        <li className="hamburgerMenuLi"><a href="#">sdfsfsdfsdfsdf</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Hamburger