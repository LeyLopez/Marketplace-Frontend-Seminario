import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [rol, setRol] = useState("");

  useEffect(() => {
    if (user) {
      setRol(user.rol);
    }
  }, [user]);

  return (
    <NavbarContext.Provider value={{ rol, setRol }}>
      {children}
    </NavbarContext.Provider>
  );
};

