import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Todo from "./todo";

const data = [
  { text: "Coding", priority: "High", id: 1 },
  { text: "Cooking", priority: "Medium", id: 2 },
  { text: "Watching Movie", priority: "Low", id: 3 },
];

function TodoList() {
  const location = useLocation();
  const [todoList, setTodoList] = useState(data);
  const [todoText, setTodoText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});

  useEffect(()=> {
    if (location.state?.id) {
      console.log("inside use effect:", location.state.id);
      setTodoList(
        [...todoList].map((todo) => {
          if (todo.id === location.state.id.id) {
            return location.state.id;
          } else {
            return todo;
          }
        })
      );
    }
  }, [])

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
        <ul style={{ margin: "auto", width: "100%" }}>
          {todoList.map((todo, id) => (
            <Todo
              todo={todo}
              key={id}
              id={id}
              //   updateTodoHandler={updateTodoHandler}
              //   removeTodoHandler={removeTodoHandler}
            />
          ))}
        </ul>
      </div>
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
