import React from "react";
import "./index.css";
import Root from "./routes/root";
import Cars from "./routes/Cars";
import Suvs from "./routes/Suvs";
import About from "./routes/About";
import Bikes from "./routes/Bikes";
import Error from "./routes/Error";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/cars",
        element: <Cars />,
        errorElement: <Error />,
      },
      {
        path: "/bikes",
        element: <Bikes />,
        errorElement: <Error />,
      },
      {
        path: "/suvs",
        element: <Suvs />,
        errorElement: <Error />,
      },
      {
        index: true,
        element: <About />,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
