import { Action, State } from '@ngrx/store'
import { Data } from './../mockup/data'

export const initialState = []

export function Reducer(state = initialState, action: Action){
    switch (action.type) {
        case "GET_PRODUCS":
            return {
                ...state,
                products: Data
            }
        default:
            return state
    }
    return state
}