import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
    todo: todoReducer,
    filter: filterReducer,
});

export default reducers;