import { createSlice } from '@reduxjs/toolkit';

const initialProject = {
    projects: [],
    isLoading: false,
    error: null,
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialProject,
    reducers: {
        startLoading: (state, /* action */ ) => {
            state.isLoading = true;
            state.error = null;
        },
        addNewItem: ( state, action ) => {
            state.projects.push(action.payload);
            state.isLoading = false;
        },
        setItems: ( state, action ) => {
            state.projects.push(action.payload);
            state.isLoading = false;
        },
        setError: ( state, action ) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const { startLoading, addNewItem, setItems, setError } = projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
