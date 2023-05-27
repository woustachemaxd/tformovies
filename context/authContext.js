import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const testValue = true;
  return (
    <AuthContext.Provider value={{ testValue }}>
      {children}
    </AuthContext.Provider>
  );
};
