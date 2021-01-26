import { createAction, createReducer } from "@reduxjs/toolkit";

//Action creators
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");  

let lastId = 0;
export default createReducer([],{
    //key: value
    //actions: function
    [bugAdded.type]:(state, action) =>{
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        });
    },

    [bugResolved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    }
})

// //Action types
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved"; 
// const BUG_RESOLVED = "bugResolved";

// //Action creators
// export function bugAdded(description) {
//     return {
//         type: BUG_ADDED,
//         payload: {
//             description
//         }
//     }
// }
// export const bugResolved = (id) => ({
//     type: BUG_RESOLVED,
//     payload: {
//         id
//     }
// })


// //Reducers 
// let lastId = 0;
// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case BUG_ADDED.type:
//         console.log(action.payload)
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ];

//         case BUG_REMOVED.type:
//             return state.filter(bug => bug.id !== action.payload.id);

//         case BUG_RESOLVED.type:
//             return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })

//         default:
//             return state;
//     }

// }