import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import TodoList from "./pages/TodoList";
import TodoEdit from "./pages/TodoEdit";
import { useDispatch, useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/todos", element: <TodoList /> },
      { path: "todos/:todoId", element: <TodoEdit /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  console.log("theme:", theme);

  const updateTheme = () => {
    if (theme.color === "dark") {
      dispatch({ type: "light" });
    } else if (theme.color === "light") {
      dispatch({ type: "dark" });
    }
  };

  return (
    <>
      <button onClick={updateTheme}>Update Theme</button>
      <p>{theme.color}</p>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
