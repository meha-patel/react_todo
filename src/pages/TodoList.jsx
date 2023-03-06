import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./todo";

function TodoList() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");

  const listOfTodoFromRedux = useSelector((state) => state.todos);

  const addTodoHandler = () => {
    dispatch({
      type: "add",
      payload: {
        text: todoText,
        priority: todoPriority,
        id:
          listOfTodoFromRedux && listOfTodoFromRedux.length > 0
            ? listOfTodoFromRedux[listOfTodoFromRedux.length - 1]?.id + 1
            : 1,
      },
    });
  };

  return (
    <>
      <div>
        <ul style={{ margin: "auto", width: "100%" }}>
          {listOfTodoFromRedux.map((todo, id) => (
            <Todo todo={todo} key={id} id={id} />
          ))}
        </ul>
      </div>
      <br />
      <br />
      <input
        type="text"
        value={todoText}
        placeholder="New todo..."
        onChange={(e) => setTodoText(e.target.value)}
      />
      <br />
      <br />
      <select
        onChange={(e) => setTodoPriority(e.target.value)}
        value={todoPriority}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <br />
      <button onClick={addTodoHandler}>Save</button>
    </>
  );
}

export default TodoList;
