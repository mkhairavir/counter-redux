import { combineReducers } from 'redux'
import iceCreamReducer from './IceCreamReducer'
import cakesReducer from './CakesReducer'

const reducce = combineReducers({
    iceCreamReducer,
    cakesReducer
});

export default reducce;