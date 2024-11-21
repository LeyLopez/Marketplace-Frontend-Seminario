import { useState } from "react";
import { SellerNavbar } from "./SellerNavbar";
import "../../assets/css/styles.css";

export function FormAddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    availability: 0,
    status: "",
    category: "",
    salesman: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <>
      <SellerNavbar />
      <div
        className="container  mt-5"
        style={{ width: "50%" }}
      >
        <div className="w-100">
          <h2>Formulario de Producto</h2>
          <form onSubmit={handleSubmit} id="formAddProduct">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="availability" className="form-label">
                Disponibilidad
              </label>
              <input
                type="number"
                className="form-control"
                id="availability"
                name="availability"
                value={product.availability}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Estado
              </label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={product.status}
                onChange={handleChange}
                required
              >
                <option value="">Disponible</option>
                <option value="activo">Pausado</option>
                <option value="inactivo">Agotado</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Categoría
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="salesman" className="form-label">
                Vendedor
              </label>
              <input
                type="text"
                className="form-control"
                id="salesman"
                name="salesman"
                value={product.salesman}
                onChange={handleChange}
                required
              />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
