import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";


function App() {
    return (
        <div className={s.App}>
            <h1 className={s.red}>IT-INCUBATOR</h1>
            <div className={s.title}><h2>react homeworks:</h2></div>
            <div id="h1"><HW1/></div>
            <div id="h2"><HW2/></div>
            <div id="h3"><HW3/></div>
            <div id="h4"><HW4/></div>
            <div id="h5">Homework №5<HW5/></div>
        </div>

    )
}

export default App
