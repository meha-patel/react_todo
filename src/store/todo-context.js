import React from "react";
// set the defaults
const todoContext = React.createContext({
  todoList: [],
  setTodoList: () => {},
  themeMode: "dark",
});

export default todoContext;
