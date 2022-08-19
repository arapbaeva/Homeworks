import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
    return (
        <div className={s.App}>
            <h1 className={s.red}>IT-INCUBATOR</h1>
            <div className={s.title}><h2>react homeworks:</h2></div>
            <div id="h5"><HW5/></div>
        </div>

    )
}

export default App
