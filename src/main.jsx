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
import PrivateRoute from "./Private/PrivateRoute.jsx";
import Detailspage from "./Components/Detailspage.jsx";
import MyLikedArtifact from "./Components/MyLikedArtifact.jsx";
import MyArtifactsAdd from "./Components/MyArtifactsAdd.jsx";
import UpdatePage from "./Components/UpdatePage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      // home
      {
        path: "/",
        element: <Home />,
      },
      // allartifacts
      {
        path: "/allartifacts",
        element: (
          <PrivateRoute>
            <AllArtifacts />
          </PrivateRoute>
        ),
      },

      // add artifacts
      {
        path: "/addartifacts",
        element: (
          <PrivateRoute>
            {" "}
            <AddArtifcats />
          </PrivateRoute>
        ),
      },
      
      {
        path : '/mylikedartifact',
        element :<PrivateRoute><MyLikedArtifact/></PrivateRoute>

      },
      // my added artifacts 
      {
        path : "/myadedaartifacts",
        element : <PrivateRoute><MyArtifactsAdd/></PrivateRoute>
      },
      {
        path: "/updatepage/:id",
        element: <UpdatePage/>,
        loader : ({params})=> fetch(`https://server-o66mtchf3-sakibfakirs-projects.vercel.app/myaddedartifacts/${params.id}`)
        
      },

      // details page

      {
        path: "/detailspage/:id",
        element: (
          <PrivateRoute>
            <Detailspage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-sable-sigma-67.vercel.app/.app/detailspage/${params.id}`),
      },
      // my liked artifact
     
    ],
  },
  // authlayout
  {
    path: "/authloayout",
    element: <AuthLayout />,
    children: [
      {
        path: "/authloayout/signin",
        element: <SignIn />,
      },
      {
        path: "/authloayout/signup",
        element: <SignUp />,
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
