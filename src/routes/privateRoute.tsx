import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface PrivateRoutesProps {
  children: ReactNode;
  restrictedTo?: string;
}

const PrivateRoutes = ({ children, restrictedTo }:PrivateRoutesProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("userRole");

    if (!token || (restrictedTo && userRole !== restrictedTo)) {
      localStorage.clear();
      navigate("/");
    }
  }, [navigate, restrictedTo]);

  return <>{children}</>;
};

export default PrivateRoutes;
