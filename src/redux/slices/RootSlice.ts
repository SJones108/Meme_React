import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        file_name: 'file_name',
        title: 'title',
        mimetype: 'mimetype',
        upper_cap: 'upper_cap',
        lower_cap: 'lower_cap',
    },
    // linking pieces together
    // Setting the input to the state.name
    reducers: {
        file_name: (state, action) => {state.file_name = action.payload},
        title: (state, action) => {state.title = action.payload},
        mimetype: (state, action) => {state.mimetype = action.payload},
        upper_cap: (state, action) => {state.upper_cap = action.payload},
        lower_cap: (state, action) => {state.lower_cap = action.payload},
    }
}) 

// taking code above, and exporting
export const reducer = rootSlice.reducer;
export const { file_name, title, mimetype, upper_cap, lower_cap } = rootSlice.actions