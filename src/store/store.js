import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "./projects";

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
    }
});
