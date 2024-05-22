import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
// import PrivateRoutes from "./privateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
  ]);
  
export default router;