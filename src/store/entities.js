import { combineReducers } from "redux";
import bugReducer from "./bug";
import projectReducer from "./projects"

export default combineReducers({
    bugs: bugReducer,
    projects: projectReducer
})