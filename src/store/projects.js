import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        //maps actions to action handlers
        projectAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                name: action.payload.name,
            });
        }

    }
})

export const {projectAdded} = slice.actions;

export default slice.reducer;