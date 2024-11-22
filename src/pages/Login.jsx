import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.get("http://localhost:8080/api/users");
      const users = response.data;

      // Validar email y contraseña
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        setUser(user);
        setSuccessMessage("Inicio de sesión exitoso. Redirigiendo...");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        setError("Email o contraseña incorrectos.");
      }
    } catch (err) {
      console.error("Error durante la conexión:", err);
      setError("Error de conexión al servidor. Intente más tarde.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center pt-5">
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

              {error && <div className="alert alert-danger">{error}</div>}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="floatingInput">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
