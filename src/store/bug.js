import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//<-------------solution 3------------->
let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        //maps actions to action handlers
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }

    }
})

export const {bugAdded, bugResolved} = slice.actions;

export default slice.reducer;

//selector function
export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);




//<--------------solution 2------------------------>
// //Action creators
// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");  

// let lastId = 0;
// export default createReducer([],{
//     //key: value
//     //actions: function
//     [bugAdded.type]:(state, action) =>{
//         state.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         });
//     },

//     [bugResolved.type]: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id);
//         state[index].resolved = true;
//     }
// })

//<-----------solution 1--------------->
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