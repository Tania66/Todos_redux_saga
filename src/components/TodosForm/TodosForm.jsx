import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodos } from "../../features/todos/todosApiReducer";

const TodosForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTodo = (text) => {
    const todo = {
      title: text,
      id: Math.random() * 100,
      completed: false,
    };
    dispatch(addTodos(todo));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(text);
    setText("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form_input"
          type="text"
          name="text"
          value={text}
          onChange={handleInputChange}
          required
          placeholder="Enter task text..."
        />
        <button className="form__btn" type="submit">
          Add task
        </button>
      </form>
    </>
  );
};

export default TodosForm;
