import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "@/pages/DashBoard";
// import PrivateRoutes from "./privateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
  ]);
  
export default router;