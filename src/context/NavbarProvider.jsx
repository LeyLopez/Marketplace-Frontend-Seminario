import React, { useState } from "react";
import { NavbarContext } from "./NavbarContext";

export const NavbarProvider = ({ children }) => {
  const [navbarType, setNavbarType] = useState("public");

  return (
    <NavbarContext.Provider value={{ navbarType, setNavbarType }}>
      {children}
    </NavbarContext.Provider>
  );
};


