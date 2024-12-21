import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextapi from "./Context/AuthContextapi.jsx";
import ErrorPages from "./Error/ErrorPages.jsx";
import Home from "./Components/Home.jsx";
import AllArtifacts from "./Components/AllArtifacts.jsx";
import AddArtifcats from "./Components/AddArtifcats.jsx";
import AuthLayout from "./Auth- entication/AuthLayout.jsx";
import SignIn from "./Auth- entication/SignIn.jsx";
import SignUp from "./Auth- entication/SignUp.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      // home
      {
        path: "/",
        element: <Home/>
      },
      // allartifacts
      {
        path:'/allartifacts',
        element: <AllArtifacts/>
      },

      // add artifacts
      {
        path: '/addartifacts',
        element: <AddArtifcats/>
      },


      // authLayout


    ],
    
  },
  // authlayout
  {
    path : '/authloayout',
    element:<AuthLayout/>,
    children:[
      {
        path: '/authloayout/signin',
        element: <SignIn/>
      },
      {
        path:'/authloayout/signup',
        element: <SignUp/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  
    <StrictMode>

      <AuthContextapi>
      <RouterProvider router={route} />
      </AuthContextapi>


    </StrictMode>
 
);
