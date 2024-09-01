import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../features/todos/todosSelector";
import { reset } from "../../features/todos/todosApiReducer";

const ClearButton = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  return (
    <>
      {tasks.length !== 0 && (
        <button
          className="reset_btn"
          type="button"
          onClick={() => dispatch(reset())}
        >
          Clear
        </button>
      )}
    </>
  );
};

export default ClearButton;
