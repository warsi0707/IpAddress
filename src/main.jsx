import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
