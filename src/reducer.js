let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type = "bugAdded")
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    else if(action.type == "bugRemove")  
        return state.filter(bug => bug.id != action.payload.id);
        
    return state;    

}