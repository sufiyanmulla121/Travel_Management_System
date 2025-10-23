import React from "react";
import useAuth from "../context/auth-provider/use-auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isLogin } = useAuth();
  return isLogin ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoutes;
