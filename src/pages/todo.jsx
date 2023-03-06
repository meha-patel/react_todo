import React from "react";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ todo, id }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  let backgroundStyle = "";
  const { text, priority } = todo;
  if (priority === "High") {
    backgroundStyle = "background-red";
  } else if (priority === "Medium") {
    backgroundStyle = "background-yellow";
  } else {
    backgroundStyle = "background-green";
  }

  const removeTodoHandler = (id) => {
    if (id) {
      dispatch({
        type: "delete",
        payload: {
          id: id,
        },
      });
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
        opacity: theme.color === "dark" ? 0.5 : 1,
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
      <Link to={`/todos/${todo.id}`} state={{ id: todo }}>
        <ModeIcon
          style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}
          //   onClick={() => updateTodoHandler(todo)}
        />
      </Link>
    </li>
  );
};

export default Todo;
