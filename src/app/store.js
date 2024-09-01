import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../features/sagas/sagas";
import { todoSagaRed } from "../features/todos/todosApiReducer";
const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
  todos: todoSagaRed,
});

const rootReducer = (state, action) => {
  if (action.type === "todos/reset") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
