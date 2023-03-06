import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import todoContext from "../store/todo-context";
import Todo from "./todo";

function TodoList() {
  const location = useLocation();
  // const [todoList, setTodoList] = useState(data);
  const [todoText, setTodoText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});

  const {todoList, setTodoList} = useContext(todoContext);

  // useEffect(()=> {

  // }, [])

  const addTodoHandler = () => {
    setTodoList([
      ...todoList,
      {
        text: todoText,
        priority: todoPriority,
        id: todoList[todoList.length - 1].id + 1,
      },
    ]);
  };

  return (
    <>
      <div>
        <ul style={{margin: "auto", width: "100%"}}>
          {todoList.map((todo, id) => (
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
