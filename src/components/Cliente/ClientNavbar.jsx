import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { ShoppingCartContext } from "../../context/ShoppingCartProvider";
import { NavbarContext } from "../../context/NavbarProvider";


export const ClientNavbar = () => {
  const { orderItem } = useContext(ShoppingCartContext);
  const { setRol } = useContext(NavbarContext);

  const navigate = useNavigate();

  const onResetPassword = () => {
    navigate("/recoverpassword");
  }

  const onDeleteAccount = () => {
    navigate('/deleteaccount');
  }

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
              className="col-12 col-lg-auto mb-6 mb-lg-0 me-lg-auto"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Busca el producto que deseas comprar"
                aria-label="Search"
              />
            </form>
            <NavLink to="/shoppingcart" className="nav-link px-2">
              <Badge badgeContent={orderItem.length} color="primary">
                <ShoppingCart color="action" />
              </Badge>
            </NavLink>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <NavLink to="/home" className="nav-link white px-2">
                    <button className="btn btn-dark">Inicio</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders" className="nav-link px-2">
                    <button className="btn btn-dark">Mis Compras</button>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <div className="nav-link px-2">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cuenta
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <button className="dropdown-item" onClick={onResetPassword}>
                          Cambiar contraseña
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={onDeleteAccount}>
                          Eliminar cuenta
                        </button>
                      </li>
                    </ul>
                  </div>
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

