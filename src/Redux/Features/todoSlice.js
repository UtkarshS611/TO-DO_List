import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const loadFromLocalStorage = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return [];
  }
};

// Save tasks to localStorage
const saveToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const todoSlice = createSlice({
  name: "todos",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload, status: "pending" };
      state.push(newTodo);
      saveToLocalStorage(state);
    },
    toggleStatus: (state, action) => {
      const task = state.find((todo) => todo.id === action.payload);
      if (task) {
        task.status = task.status === "pending" ? "completed" : "pending";
        saveToLocalStorage(state);
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
  },
});

export const { addTodo, toggleStatus, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
