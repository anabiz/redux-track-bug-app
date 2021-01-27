//import { createStore, applyMiddleware } from "redux";
//import reducer from "./bug";
import reducer from "./reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import func from "./middleware/func";
//import { devToolsEnhancer } from "redux-devtools-extension"

// export default function (){
//     return configureStore({ reducer });
// }; 

//registering middleware with just redux, that is without redux/toolkit
//export default store = createStore(reducer, applyMiddleWare(logger));

//register middleware with reduxjs/toolkit and passing it parameter
export const store = configureStore({ 
    reducer,
    middleware: [ ...getDefaultMiddleware(), logger({destination: "console"})] 
});

// export const unsubscribe = createAppStore().subscribe(()=>{
//     console.log("state changed", createAppStore().getState());
// })
