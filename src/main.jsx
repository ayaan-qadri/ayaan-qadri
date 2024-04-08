import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Pages/Home.jsx";
import Social from "./Pages/Social";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Component/Layout.jsx';
import Projects from './Pages/Projects.jsx';
import './main.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/socials",
        element: <Social />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
