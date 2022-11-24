import React from 'react'
import {checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'


export type User = {
    _id: number
    name: string
    age: number
}
let initialState: User[]
beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 6, name: 'Игнат', age: 18},
    ]
})

test('sort name up', () => {
    const action = sortUpAC()
    const newState = homeWorkReducer(initialState, action)
    console.log(newState)
    expect(newState[0].name).toBe('Александр')
})
test('sort name down', () => {
    const action = sortDownAC()
    const newState = homeWorkReducer(initialState, action)
    expect(newState[4].name).toBe('Ирина')
})
test('check age 18', () => {
    const action = checkAgeAC(18)
    const newState = homeWorkReducer(initialState, action)
    expect(newState[2].age).toBe(40)
})
