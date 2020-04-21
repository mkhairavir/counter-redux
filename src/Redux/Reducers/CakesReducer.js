import {INCREMENTCakes, DECREMENTCakes} from '../Actions/CakesAction'

const stateAwal = {
    cakes : 0
}

const cakesReducer = (state = stateAwal, action) => {
    switch(action.type) {
        case INCREMENTCakes:
            return {
                ...state,
                cakes: state.cakes+1
          }
        case DECREMENTCakes:
            return{
                ...state,
                cakes: state.cakes-1
            }
        default:
            return state

        }
    }

export default cakesReducer