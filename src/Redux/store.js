import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Features/authSlice";
import themeReducer from "./Features/themeSlice";
import todoReducer from "./Features/todoSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        todos: todoReducer,
    }
})

export default store;