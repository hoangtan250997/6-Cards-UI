import "./App.css";
import HomeLayout from "./layout/HomeLayout";

import Login from "./pages/login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
