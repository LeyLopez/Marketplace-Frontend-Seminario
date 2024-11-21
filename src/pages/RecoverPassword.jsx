import { ClientNavbar } from "../components/Cliente/ClientNavbar";

export const RecoverPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <>
      <ClientNavbar></ClientNavbar>
      <div className="d-flex justify-content-center pt-5">
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal">Restablecer contraseña</h1>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  // value={formData.email}
                  // onChange={handleInputChange}
                  required
                />
                <label htmlFor="floatingInput">Contraseña anterior</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleInputChange}
                  required
                />
                <label htmlFor="floatingPassword">Nueva contraseña</label>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">
                Restablecer
              </button>
            </form>
          </div>
        </div>
    </>
  );
};
