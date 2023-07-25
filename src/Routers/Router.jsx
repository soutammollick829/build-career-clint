import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About us/About";
import Contact from "../Pages/Home/Contact us/Contact";
import Colleges from "../Pages/Colleges/Colleges";
import Login from "../Pages/Login page/Login";
import Register from "../Pages/Register page/Register";
import EventAndSports from "../Pages/Event&Sports/EventAndSports";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/colleges",
        element:<Colleges/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/event-sport",
        element:<PrivateRoute><EventAndSports/></PrivateRoute>
      }
    ]
  },
]);

export default router;
