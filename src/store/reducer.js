import { combineReducers } from "redux";
import themeReducer from "../pages/ThemeReducer";

import todoReducer from "../pages/TodoReducer";

const RootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todoReducer,
  theme: themeReducer,
});

export default RootReducer;
