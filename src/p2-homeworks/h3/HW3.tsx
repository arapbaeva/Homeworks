import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}


// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        {_id: v1(), name: "Programmer"}
    ])


    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name: name}
        setUsers([...users, newUser])
    }


    return (
        <div>
            <hr/>

            <div className={s.green}><h3>Homework №3</h3></div>


            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}

            />
            <div>{users.map((user) => <div>{user.name}</div>)}</div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>

    )
}

export default HW3
