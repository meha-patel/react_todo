import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import {useState} from "react";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import TodoList from "./pages/TodoList";
import TodoEdit from "./pages/TodoEdit";
import todoContext from "./store/todo-context";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )

const data = [
  {text: "Coding", priority: "High", id: 1},
  {text: "Cooking", priority: "Medium", id: 2},
  {text: "Watching Movie", priority: "Low", id: 3},
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <HomePage />},
      {path: "/todos", element: <TodoList />},
      {path: "todos/:todoId", element: <TodoEdit />},
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  const [todoList, setTodoList] = useState(data);
  const [themeMode, setThemeMode] = useState("dark");
  const value = {todoList, setTodoList, themeMode};

  const updateTheme = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    } else if (themeMode === "light") {
      setThemeMode("dark");
    }
  };

  return (
    <>
      <button onClick={updateTheme}>Update Theme</button>
      <p>{themeMode}</p>
      <todoContext.Provider value={value}>
        <RouterProvider router={router} />;
      </todoContext.Provider>
    </>
  );

  // return <RouterProvider router={router} />;
}

export default App;
