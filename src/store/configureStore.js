//import { createStore } from "redux";
import reducer from "./bug";
import { configureStore } from "@reduxjs/toolkit";
//import { devToolsEnhancer } from "redux-devtools-extension"

// export default function (){
//     return configureStore({ reducer });
// }; 

export const store = configureStore({ reducer });

// export const unsubscribe = createAppStore().subscribe(()=>{
//     console.log("state changed", createAppStore().getState());
// })
