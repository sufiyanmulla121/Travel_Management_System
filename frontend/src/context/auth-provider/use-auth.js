import { useContext } from "react";
import { AuthContext } from "./auth-context";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useUser must use within UserProvider");
  return context;
};

export default useAuth;
