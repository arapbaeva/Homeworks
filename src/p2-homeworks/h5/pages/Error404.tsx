import React from 'react'
import s from './styles/error.module.css'


function Error404() {
    return (
        <div>
            <div className={s.error}>404
            <div className={s.errorMessage}><h1>Page not found!</h1></div>
            <div>Looks like you're lost friend</div>
            </div>
        </div>
    )
}

export default Error404
