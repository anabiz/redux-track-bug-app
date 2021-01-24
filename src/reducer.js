import {BUG_ADDED, BUG_REMOVED} from "./actionType";
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADDED:

            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case BUG_REMOVED:
            return state.filter(bug => bug.id != action.payload.id);

        default:
            return state;
    }

}
// export default function reducer(state = [], action) {
//     if (action.type = "bugAdded")
//         return [
//             ...state,
//             {
//                 id : ++lastId,
//                 description : action.payload.description,
//                 resolved : false
//             }
//         ];
//     else if(action.type == "bugRemove")  
//         return state.filter(bug => bug.id != action.payload.id);

//     return state;    

// }