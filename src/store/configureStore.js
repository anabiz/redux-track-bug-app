//import { createStore } from "redux";
//import reducer from "./bug";
import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger"
//import { devToolsEnhancer } from "redux-devtools-extension"

// export default function (){
//     return configureStore({ reducer });
// }; 

export const store = configureStore({ 
    reducer,
    middleware: [logger] 
});

// export const unsubscribe = createAppStore().subscribe(()=>{
//     console.log("state changed", createAppStore().getState());
// })
