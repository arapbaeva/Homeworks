import React, {useState} from 'react'
import Affairs from './Affairs'
import style from "./Affairs.module.css";


// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}//
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'high'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter((el) => {
        return el.priority === 'high'
    })
    if (filter === 'middle') return affairs.filter((el) => {
        return el.priority === 'middle'
    })
    if (filter === 'low') return affairs.filter(el => {
        return el.priority === 'low'
    })
    else return affairs // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter((el) => {
        return el._id !== _id
    })
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <div className={style.green}><h3>Homework №2</h3></div>


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>

    )
}

export default HW2
