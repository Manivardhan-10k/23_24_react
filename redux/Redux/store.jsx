import { legacy_createStore } from "redux";
import { counterReducer } from "./reducer";


// const rootReducer=counterReducer

const global_store=legacy_createStore(counterReducer)
export default global_store