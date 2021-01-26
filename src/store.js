import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  

export const unsubscribe = store.subscribe(()=>{
    console.log("state changed", store.getState())
})

export default store;