import "./App.css";
import HomeLayout from "./layout/HomeLayout";

import Report from "./pages/report/Report";
import DatePicker from "./components/date/DatePicker";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/report",
          element: <Report />,
        },
        {
          path: "/spending",
          element: <DatePicker />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
