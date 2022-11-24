import {User} from "./tests/homeWorkReducer.test"


export type ActionType = SortUpACType | SortDownACType | CheckAgeACType
export const homeWorkReducer = (state: User[], action: ActionType): User[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            return state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0
                }
            )
        }
        case 'SORT-DOWN': {
            return state.sort((b, a) => {
                if (b.name > a.name) {
                    return 1
                }
                if (b.name < a.name) {
                    return -1
                }
                return 0
            })
        }
        case 'CHECK-AGE': {
            // todo find user by age filter
            return state.filter(user => user.age > action.payload.age
            )
        }
        default:
            return state
    }
}

type SortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'SORT-UP'
    } as const
}

export type SortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'SORT-DOWN',
    } as const
}

export type CheckAgeACType = ReturnType<typeof checkAgeAC>
export const checkAgeAC = (age: number) => {
    return {
        type: 'CHECK-AGE',
        payload: {
            age
        }
    } as const
}