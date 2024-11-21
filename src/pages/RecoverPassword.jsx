import React from "react";
import { NavLink } from "react-router-dom";

export const RecoverPassword = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="col-md-3 ">
        <h4>Recuperar contraseña</h4>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Correo eléctronico
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <NavLink to="/">
          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};
