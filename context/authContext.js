import React, { createContext, useState, useEffect } from "react";
import data from "./testData.json";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const testValue = true;

  return (
    <AuthContext.Provider value={{ testValue, data }}>
      {children}
    </AuthContext.Provider>
  );
};
