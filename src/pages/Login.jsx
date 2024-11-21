import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

  }


  return (
    <div className="d-flex justify-content-center pt-5">
    <div className="col-md-3">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <div className="form text-start my-3">
          <NavLink to="/recoverpassword">
            ¿Olvidaste tu contraseña?
          </NavLink>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Entrar
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
      </form>
    </div>
  </div>
  )
}
