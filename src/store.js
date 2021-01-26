import { createStore } from "redux";
import reducer from "./reducer";
import { devToolsEnhancer } from "redux-devtools-extension"

const store = createStore(reducer, devToolsEnhancer( {trace: true}));  

export const unsubscribe = store.subscribe(()=>{
    console.log("state changed", store.getState())
})

export default store;