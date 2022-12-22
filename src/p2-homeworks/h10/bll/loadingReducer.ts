

const initState = {
isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): typeof initState  => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC >
export const loadingAC = (isLoading: boolean) => {
return {
type:  'IS-LOADING',
isLoading: isLoading
}as const
}