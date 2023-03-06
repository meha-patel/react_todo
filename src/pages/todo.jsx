import React, {useContext} from "react";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import {Link} from "react-router-dom";
import todoContext from "../store/todo-context";

const Todo = ({todo, id}) => {
  const {todoList, setTodoList, themeMode} = useContext(todoContext);

  let backgroundStyle = "";
  const {text, priority} = todo;
  if (priority === "High") {
    backgroundStyle = "background-red";
  } else if (priority === "Medium") {
    backgroundStyle = "background-yellow";
  } else {
    backgroundStyle = "background-green";
  }

  const removeTodoHandler = (id) => {
    if (id) {
      const removeItem = todoList.filter((todo) => {
        return todo.id !== id;
      });
      setTodoList(removeItem);
    }
  };

  return (
    <li
      style={{
        border: "1px solid black",
        padding: "4px",
        width: "400px",
        marginBottom: "6px",
        textAlign: "left",
        paddingLeft: "70px",
        opacity: themeMode === "dark" ? 0.5 : 1,
      }}
      className={backgroundStyle}
      key={id}
    >
      {text}
      <DeleteIcon
        style={{float: "right", cursor: "pointer", paddingRight: "10px"}}
        onClick={() => removeTodoHandler(todo.id)}
      />

      {/* <DeleteIcon
        style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
        onClick={() => removeTodoHandler(todo.id)}
      /> */}
      <Link to={`/todos/${todo.id}`} state={{id: todo}}>
        <ModeIcon
          style={{float: "right", cursor: "pointer", paddingRight: "10px"}}
          //   onClick={() => updateTodoHandler(todo)}
        />
      </Link>
    </li>
  );
};

export default Todo;
