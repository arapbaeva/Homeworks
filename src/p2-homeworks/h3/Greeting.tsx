import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)


    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>

            <button onClick={addUser}>add</button>
            {error && <div className="error-message">{error}</div>}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
