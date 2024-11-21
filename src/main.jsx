import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Single from "./pages/Single.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProtectedRoutes component={<Profile/>}/>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <ProtectedRoutes component={<Dashboard/>}/>,
      },
      {
      path: "single",
      element: <ProtectedRoutes component={<Single/>}/>,
    }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
