import {INCREMENT, DECREMENT} from '../Actions/IceCreamAction'

const stateAwal = {
    iceCream : 0
}

const iceCreamReducer = (state = stateAwal, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                iceCream: state.iceCream+1
          }
        case DECREMENT:
            return{
                ...state,
                iceCream: state.iceCream-1
            }
        default:
            return state

        }
    }

export default iceCreamReducer