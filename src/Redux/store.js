import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Features/authSlice";
import themeReducer from "./Features/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer
    }
})

export default store;