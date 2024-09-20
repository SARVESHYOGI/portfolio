import { configureStore } from "@reduxjs/toolkit";
import thememode from "./Slice/thememode";


export const store = configureStore({
    reducer: {
        theme: thememode,
    },
})