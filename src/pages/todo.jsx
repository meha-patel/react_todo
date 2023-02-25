import React from "react";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { Link } from "react-router-dom";

const Todo = ({ todo, id, removeTodoHandler, updateTodoHandler }) => {
  let backgroundStyle = "";
  const { text, priority } = todo;
  if (priority === "High") {
    backgroundStyle = "background-red";
  } else if (priority === "Medium") {
    backgroundStyle = "background-yellow";
  } else {
    backgroundStyle = "background-green";
  }

  return (
    <li
      style={{
        border: "1px solid black",
        padding: "4px",
        width: "400px",
        marginBottom: "6px",
        textAlign: "left",
        paddingLeft: "70px",
      }}
      className={backgroundStyle}
      key={id}
    >
      {text}
      <DeleteIcon
        style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
        onClick={() => removeTodoHandler(todo.id)}
      />

      {/* <DeleteIcon
        style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
        onClick={() => removeTodoHandler(todo.id)}
      /> */}
      <Link to={`/todos/${todo.id}`} state={{id: todo}}>
        <ModeIcon
          style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
        //   onClick={() => updateTodoHandler(todo)}
        />
      </Link>
    </li>
  );
};

export default Todo;
