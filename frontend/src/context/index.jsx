import React from "react";
import AuthProvider from "./auth-provider/auth-context";
import AuthStepProvider from "./authStep-provider/authStep-context";

const IndexProviders = ({ children }) => {
  return (
    <AuthProvider>
      <AuthStepProvider>{children}</AuthStepProvider>
    </AuthProvider>
  );
};

export default IndexProviders;
