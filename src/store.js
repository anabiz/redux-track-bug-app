import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
export const unsubscribe = store.subscribe(()=>{
    console.log("state changed", store.getState())
})

store.dispatch({
    type:"bugAdded",
    payload:{
        description:"bug001"
    }
})

export default store;