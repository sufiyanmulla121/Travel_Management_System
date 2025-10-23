import React from "react";
import useAuthStep from "../../context/authStep-provider/use-authStep";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  const { value } = useAuthStep();

  const GetAuthRoute = () => {
    switch (value) {
      case 0:
        return <Login />;
      case 1:
        return <Register />;
    }
  };
  return <GetAuthRoute />;
};

export default Auth;
