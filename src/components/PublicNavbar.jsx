
import { NavLink } from "react-router-dom";

export const PublicNavbar = () => {

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 h1 fs-2">
              Marketplace Universitario
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <NavLink to="/login">
            <button type="button" className="btn btn-outline-primary me-2">
              Iniciar sesión
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button type="button" className="btn btn-outline-primary me-2">
              Registrarme
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};
