import React, {useState} from 'react'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './h8.css'

type initialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<initialPeopleType[]>(initialPeople) // need to fix any
       const finalPeople = people.map((el)=>{
        return (
            <div key={el._id} className='item'>
                {el.name}
                {el.age}
            </div>
        )
    })
        const sortUp = () => {
            setPeople(homeWorkReducer(initialPeople, sortUpAC() ));
        }
        const sortDown = () => {
            setPeople(homeWorkReducer(initialPeople, sortDownAC()));
        }
        const checkAge = () => {
            setPeople(homeWorkReducer(initialPeople, checkAgeAC( 0)));
        }

        return (
            <div>
                <hr/>
                homeworks 8

                {/*should work (должно работать)*/}
                {finalPeople}

                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge}>check age</SuperButton></div>


                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativePeople/>*/}
                <hr/>
            </div>
        )
    }

export default HW8
