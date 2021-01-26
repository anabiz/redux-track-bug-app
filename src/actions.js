import * as action from "./actionType";

export function bugAdded(description) {
    return {
        type: action.BUG_ADDED,
        payload:{
            description
        }
    }
}

export const bugResolved =(id)=> ({
        type: action.BUG_RESOLVED,
        payload:{
            id
        }
    })
