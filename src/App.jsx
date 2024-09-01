import { useDispatch, useSelector } from "react-redux";
import { FETCH_DATA_SAGA } from "./features/sagas/actionTypes";
import { useEffect } from "react";
import { selectIsLoading, selectTasks } from "./features/todos/todosSelector";
import ClearButton from "./components/ClearButton/ClearButton";
import TodosForm from "./components/TodosForm/TodosForm";
import TodosList from "./components/TodosList/TodosList";
import "./App.css";

const App = () => {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_DATA_SAGA });
  }, []);

  return (
    <div className="app">
      <TodosForm />
      {isLoading && (
        <div className="todos_inner_empty">
          <p className="todos_inner_empty_text">
            <span className="todos_inner_empty_span">Loading...</span>
          </p>
        </div>
      )}
      {tasks.length !== null && <TodosList />}
      <ClearButton />
    </div>
  );
};

export default App;
