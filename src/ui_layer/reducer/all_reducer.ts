import { combineReducers } from 'redux'
import { HeaderReducer } from '../app/header/reducers/HeaderReducer'

export const rootReducer = combineReducers({
    header: HeaderReducer
})

export type rootState = ReturnType<typeof rootReducer>