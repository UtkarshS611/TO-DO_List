import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Features/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

export default store;