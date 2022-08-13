import { actions } from "../actions"

const INITIAL_STATE = {
    offset: 0,
    type: 'none'
}

export  const rootReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actions.setOffset:
            return {
                ...INITIAL_STATE,
                offset: action.payload
            }
        case actions.getAllPoke:
            return {
                ...INITIAL_STATE,
                type: action.payload
            }
        default:
            return state
    }
}