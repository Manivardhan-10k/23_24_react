import { legacy_createStore } from "redux";
import { ProductReducer,Cartreducer,CounterReducer } from "./reducer";
// import { combineReducers } from "redux";

// const rootReducer=combineReducers({
//     product:ProductReducer,
//     cart:Cartreducer,
//     count:CounterReducer
// })

// const global_store=legacy_createStore(CounterReducer)
const global_store=legacy_createStore(ProductReducer)
export default global_store