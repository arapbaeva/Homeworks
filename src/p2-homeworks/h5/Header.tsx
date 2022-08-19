import React, {useState} from 'react'
import s from './pages/styles/Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";


function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const onclickHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div>
            <span><button className={s.button} onClick={onclickHandler}>Menu</button></span>

            {
                isModalOpen && <div>
                    <span className={s.header}>
                        <NavLink to={PATH.PRE_JUNIOR}
                                 className={(header) => header.isActive ? s.active : s.header}>Pre-Junior</NavLink>
                    </span>

                    <span className={s.header}>
                         <NavLink to={PATH.JUNIOR}
                                  className={(header) => header.isActive ? s.active : s.header}>Junior</NavLink>
                    </span>

                    <span className={s.header}>
                        <NavLink to={PATH.JUNIOR_PLUS}
                                   className={(header) => header.isActive ? s.active : s.header}>Junior+</NavLink></span>
                </div>
            }


        </div>
    )
}

export default Header
