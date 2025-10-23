import React, { createContext, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { addUser, getUser, removeUser } from "../../helpers/user.helper";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState(getUser());

  const login = (token) => {
    addUser(token);
    setIslogin(true);
    toast.success("Login Successfully");
  };

  const logout = useCallback(() => {
    removeUser();
    setIslogin(false);
    toast.success("Logout Successfully");
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
