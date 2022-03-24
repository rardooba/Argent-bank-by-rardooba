import { combineReducers } from "redux";

import userReducer from './userReducer';

//HERE is the List of reducers
const rootReducer = combineReducers({
    userReducer,
});

export default rootReducer;
