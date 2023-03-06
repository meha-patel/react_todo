import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.todos);
  const editingTodo = todos.find((t) => t.id === parseInt(params.todoId));
  const [todoText, setTodoText] = useState(editingTodo.text);
  const [todoPriority, setTodoPriority] = useState(editingTodo.priority);
  const dispatch = useDispatch();

  const editTodoHandler = () => {
    dispatch({
      type: "edit",
      payload: {
        text: todoText,
        priority: todoPriority,
        id: editingTodo.id,
      },
    });
    navigate("/todos");
  };

  return (
    <>
      <h1>Todo Edit</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <br />
      <br />
      <select
        value={todoPriority}
        onChange={(e) => {
          setTodoPriority(e.target.value);
        }}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <br />
      <button onClick={(e) => editTodoHandler(e)}>Edit</button>
    </>
  );
}

export default TodoEdit;
