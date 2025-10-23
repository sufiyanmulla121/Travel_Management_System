import { useContext } from "react";
import { AuthStepContext } from "./authStep-context";

const useAuthStep = () => {
  const context = useContext(AuthStepContext);
  if (!context) throw new Error("useAuthStep must use within AuthStepProvider");
  return context;
};

export default useAuthStep;
