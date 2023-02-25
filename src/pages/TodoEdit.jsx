import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function TodoEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [todoText, setTodoText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(location.state.id);

  const editTodoHandler = () => {
    navigate("/todos", { state: { id: selectedTodo } });
  };

  return (
    <>
      <h1>Todo Edit</h1>
      <input
        type="text"
        value={selectedTodo.text}
        onChange={(e) =>
          setSelectedTodo({
            text: e.target.value,
            priority: selectedTodo.priority,
            id: selectedTodo.id,
          })
        }
      />
      <br />
      <br />
      <select
        onChange={(e) =>
          setSelectedTodo({
            text: selectedTodo.text,
            priority: e.target.value,
            id: selectedTodo.id,
          })
        }
        value={selectedTodo.priority}
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
