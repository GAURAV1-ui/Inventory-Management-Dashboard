import { createSlice } from "@reduxjs/toolkit";

export interface IntialStateTypes {
    isDarkMode: boolean;
    isSidebarCollapsed?: boolean;
}

const initialState: IntialStateTypes = {
    isDarkMode: false,
    isSidebarCollapsed: false,
};


export const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        toggleSidebar: (state) => {
            state.isSidebarCollapsed = !state.isSidebarCollapsed;
        },
    },
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;

export default globalSlice.reducer;