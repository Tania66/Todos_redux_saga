import { MdClose } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IoMdCloudDone } from "react-icons/io";
import {
  deletedTodo,
  editTodo,
  toggleTodo,
} from "../../features/todos/todosApiReducer";
import { selectTasks } from "../../features/todos/todosSelector";

const TodosList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEditTodo = (id) => {
    if (edit.trim() === "") {
      return alert("field cannot be empty");
    }
    dispatch(editTodo({ id, newText: edit }));
    setEditId(null);
    setEdit("");
  };

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((todo) => (
          <div key={todo.id} className="todos_container">
            <input
              className="checkbox"
              checked={todo.completed}
              type="checkbox"
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {editId === todo.id ? (
              <div className="edit_container">
                <input
                  className="input_edit"
                  placeholder="Edit your todo"
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <button
                  onClick={() => handleEditTodo(todo.id)}
                  className="btn_save"
                >
                  <IoMdCloudDone size={24} />
                </button>
              </div>
            ) : (
              <p className="text">{todo.title}</p>
            )}
            {editId !== todo.id && (
              <button onClick={() => setEditId(todo.id)}>
                <FaRegEdit size={22} />
              </button>
            )}
            <button
              className="btn_delete"
              type="button"
              onClick={() => dispatch(deletedTodo(todo.id))}
            >
              <MdClose size={24} />
            </button>
          </div>
        ))
      ) : (
        <div className="todos_inner_empty">
          <p className="todos_inner_empty_text">
            You have not added any{" "}
            <span className="todos_inner_empty_span">task</span> yet...
          </p>
        </div>
      )}
    </div>
  );
};

export default TodosList;
