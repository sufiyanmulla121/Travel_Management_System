import React, { createContext, useState } from "react";

export const AuthStepContext = createContext();
const AuthStepProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const changeValue = (data) => {
    setValue(data);
  };

  return (
    <AuthStepContext.Provider value={{ value, changeValue }}>
      {children}
    </AuthStepContext.Provider>
  );
};

export default AuthStepProvider;
