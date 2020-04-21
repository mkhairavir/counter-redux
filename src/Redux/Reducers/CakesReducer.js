import {INCREMENT, DECREMENT} from '../Actions/CakesAction'

const stateAwal = {
    cakes : 0
}

const cakesReducer = (state = stateAwal, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                cakes: state.cakes+1
          }
        case DECREMENT:
            return{
                ...state,
                cakes: state.cakes-1
            }
        default:
            return state

        }
    }

export default cakesReducer