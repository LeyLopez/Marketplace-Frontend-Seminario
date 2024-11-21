import React, { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    rol: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Validar contraseñas coincidentes
    if (formData.password !== confirmPassword) {
      setError("Las contraseñas no coinciden. Por favor, intente de nuevo.");
      return;
    }

    try {
      // Petición al backend para registrar al usuario
      const response = await fetch("http://localhost:8088/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rol: formData.rol.toUpperCase(), // Asegura que se envía en mayúsculas como enum
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Error al registrar al usuario.");
        return;
      }

      // Manejo exitoso
      setSuccessMessage("Usuario registrado con éxito. Ahora puede iniciar sesión.");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        rol: "",
        password: "",
      });
      setConfirmPassword("");
    } catch (err) {
      console.error("Error durante el registro:", err);
      setError("Error de conexión al servidor. Intente más tarde.");
    }
  };

  return (
      <div className="d-flex justify-content-center pt-5">
        <div className="col-md-4">
          <h1 className="h3 mb-3 fw-normal">Registro</h1>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido</label>
              <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Correo Electrónico</label>
              <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Dirección</label>
              <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Rol</label>
              <select
                  className="form-select"
                  name="rol"
                  value={formData.rol}
                  onChange={handleInputChange}
                  required
              >
                <option value="">Seleccione un rol...</option>
                <option value="VENDEDOR">Vendedor</option>
                <option value="CLIENTE">Cliente</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Contraseña</label>
              <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Confirmar Contraseña</label>
              <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};
