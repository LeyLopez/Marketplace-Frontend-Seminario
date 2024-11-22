import React from "react";

export const Signup = () => {
  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <div className="col-md-3 ">
          <h1 className="h3 mb-3 fw-normal">Registro</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="username"
                className="form-control"
                name="name"
                //   value={user.name}
                //   onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                //   value={user.lastname}
                //   onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Dirección</label>
              <input
                type="address"
                className="form-control"
                name="address"
                placeholder="Mar caribe"
                //   value={user.address}
                //   onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="nombre@unimagdalena.edu.co"
                //   value={user.email}
                //   onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="******"
                //   value={user.password}
                //   onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                className="form-control"
                //   value={confirmPassword}
                //   onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="*******"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input
                type="phone"
                className="form-control"
                placeholder="000 000 0000"
                name="phone"
                //   value={user.phone}
                //   onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <button
                className="btn btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-required="true"
              >
                Rol
              </button>
              <ul className="dropdown-menu dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    //   onClick={()=>handleRoleSelect("VENDEDOR")}
                  >
                    Vendedor
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    value="CLIENTE"
                    //   onClick={()=>handleRoleSelect("CLIENTE")}
                  >
                    Cliente
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
