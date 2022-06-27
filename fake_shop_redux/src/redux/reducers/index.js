import { combineReducers } from "redux";
import { prouductReducer, selectedProductReducer } from "./productReducer";



const reducers = combineReducers({
    allProducts: prouductReducer,
    product: selectedProductReducer,
})

export default reducers;