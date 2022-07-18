import { combineReducers } from "redux";
import toDoReducer from "./todo/todoReducer";


const rootReducers = combineReducers({
    todo: toDoReducer
})

export default rootReducers;