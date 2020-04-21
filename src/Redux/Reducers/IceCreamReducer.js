import {INCREMENTIceCream, DECREMENTIceCream} from '../Actions/IceCreamAction'

const stateAwal = {
    iceCream : 0
}

const iceCreamReducer = (state = stateAwal, action) => {
    switch(action.type) {
        case INCREMENTIceCream:
            return {
                ...state,
                iceCream: state.iceCream+1
          }
        case DECREMENTIceCream:
            return{
                ...state,
                iceCream: state.iceCream-1
            }
        default:
            return state

        }
    }

export default iceCreamReducer