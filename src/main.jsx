import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextapi from "./Context/AuthContextapi.jsx";
import ErrorPages from "./Error/ErrorPages.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      // home
      {
        path: "/",
        element: <h1>iam fome home</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  
    <StrictMode>

      <AuthContextapi>
      <RouterProvider router={route} />
      </AuthContextapi>


    </StrictMode>
 
);
