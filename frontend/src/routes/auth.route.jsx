import React from "react";
import useAuth from "../context/auth-provider/use-auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { isLogin } = useAuth();
  return isLogin ? <Navigate to="/home" replace /> : <Outlet />;
};

export default AuthRoute;
