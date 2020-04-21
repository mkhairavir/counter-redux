import {createStore, combineReducers} from 'redux'
// import IceCreamReducer from './Reducers/IceCreamReducer'
import CakesReducer from './Reducers/CakesReducer'
import reducce from './Reducers/index'

// const gabung = combineReducers({
//     // IceCreamReducer,
//     CakesReducer
// })

// export default createStore(combineReducers({iceCream: IceCreamReducer, Cakes: CakesReducer}))

export default createStore(reducce)
// export default createStore(IceCreamReducer)