import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLightTheme: (state) => 'light',  // Action to set light theme
        setDarkTheme: (state) => 'dark',    // Action to set dark theme
        toggleTheme: (state) => (state === 'light' ? 'dark' : 'light')  // Toggle between light and dark
    }
})

export const { setDarkTheme, setLightTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer




