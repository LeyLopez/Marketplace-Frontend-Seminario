  import React, { useContext } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { NavbarContext } from "../../context/NavbarProvider";


  export const SellerNavbar = () => {
    const navigate = useNavigate();
    const { setRol } = useContext(NavbarContext);

    const handleLogout = () => {
      localStorage.clear();
      setRol("");
      navigate("/login");
    };

    return (
      <div>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <form
                className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
                role="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Busca el producto que deseas comprar"
                  aria-label="Search"
                />
              </form>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                    <NavLink to="/productseller" className="nav-link white px-2">
                      <button className="btn btn-dark">Mis productos</button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/addproduct" className="nav-link px-2">
                      <button className="btn btn-dark">Agregar producto</button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/deleteproduct" className="nav-link px-2">
                      <button className="btn btn-dark">Eliminar producto</button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/editproduct" className="nav-link px-2">
                      <button className="btn btn-dark">Modificar producto</button>
                    </NavLink>
                  </li>
                </ul>
              </ul>

              <div className="dropdown text-end">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

