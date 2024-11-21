import React, { useState } from "react";
import { UserContext } from "./UserContext";
import UserServices from "../services/UserServices";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    rol: "Client"
  });

  const userService = UserServices();

  const updateUserField = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  const registerUser = async (confirmPassword) => {
    if (user.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await userService.createUser(user);
      alert("Usuario creado exitosamente");
      setUser({
        name: "",
        lastname: "",
        address: "",
        email: "",
        password: "",
        phone: "",
        rol: "",
      });
    } catch (error) {
      console.error("Error en la creación del usuario:", error);
      alert("Ocurrió un error. Inténtalo de nuevo.");
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, updateUserField, registerUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
