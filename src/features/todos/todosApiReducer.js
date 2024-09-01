import { createSlice } from "@reduxjs/toolkit";

const todoApiReducer = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    fetchData: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchDataError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchDataPending: (state, action) => {
      state.isLoading = action.payload;
    },
    addTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deletedTodo: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((task) => {
        if (task.id === id) {
          return { ...task, title: newText };
        }
        return task;
      });
    },
    reset: (state) => {},
  },
});

export const {
  fetchData,
  editTodo,
  toggleTodo,
  addTodos,
  deletedTodo,
  fetchDataError,
  fetchDataPending,
  reset,
} = todoApiReducer.actions;
export const todoSagaRed = todoApiReducer.reducer;
