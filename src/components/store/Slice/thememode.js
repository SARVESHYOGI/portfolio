import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLightTheme: (state) => 'light',
        setDarkTheme: (state) => 'dark',
        toggleTheme: (state) => (state === 'light' ? 'dark' : 'light')
    }
})

export const { setDarkTheme, setLightTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer




