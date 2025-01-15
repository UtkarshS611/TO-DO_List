import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


// get any previous tasks from localStorage
// If there are no tasks, return an empty array
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
// If there is an error, log it to the console for handling
const saveToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const todoSlice = createSlice({
  name: "todos",
  // Load initial state from localStorage
  initialState: loadFromLocalStorage(),
  reducers: {
    // Add a new task to the list of tasks
    // use nanoId to generate a unique id for the task
    addTodo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload, status: "pending" };
      state.push(newTodo);
      saveToLocalStorage(state);
    },
    // find the task by id and change the status
    toggleStatus: (state, action) => {
      const task = state.find((todo) => todo.id === action.payload);
      if (task) {
        // toggle status for displaying pending and completed tasks
        task.status = task.status === "pending" ? "completed" : "pending";
        saveToLocalStorage(state);
      }
    },
    // remove the task from the list of tasks
    removeTodo: (state, action) => {
      // filter out the task with the matching id
      return state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },
  },
});

export const { addTodo, toggleStatus, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
