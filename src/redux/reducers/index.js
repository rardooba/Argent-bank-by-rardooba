import { combineReducers } from "redux";

//Reducers
import userReducer from './userReducer';

//HERE is the List of reducers
const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;
