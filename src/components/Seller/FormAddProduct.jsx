import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/styles.css";
import { UserContext } from "../../context/UserContext";

export function FormAddProduct({ productToEdit, onProductAdded, onProductEdited }) {
  const { user } = useContext(UserContext);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    availability: 0,
    status: "",
    category: "",
    salesman: user.id,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "price" || name === "availability" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      let response;
      if (productToEdit) {
        response = await axios.put(
          `http://localhost:8088/api/products/${productToEdit.id}`,
          product,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log("Producto actualizado:", response.data);
        onProductEdited(response.data);
      } else {
        response = await axios.post(
          "http://localhost:8088/api/products",
          product,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log("Producto agregado:", response.data);
        onProductAdded(response.data);
      }
      setSuccess(true);
      if (!productToEdit) {
        setProduct({
          name: "",
          description: "",
          price: 0,
          availability: 0,
          status: "",
          category: "",
          salesman: user.id,
        });
      }
    } catch (err) {
      setError("Error al procesar el producto. Por favor, intente nuevamente.");
      console.error("Error al procesar el producto:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ width: "50%" }}>
      <div className="w-100">
        <h2>{productToEdit ? "Editar producto" : "Agregar producto"}</h2>
        <br />
        {success && (
          <div className="alert alert-success" role="alert">
            {productToEdit ? "Producto actualizado exitosamente!" : "Producto agregado exitosamente!"}
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
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
              rows={3}
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
              <option value="">Seleccionar estado</option>
              <option value="disponible">Disponible</option>
              <option value="pausado">Pausado</option>
              <option value="agotado">Agotado</option>
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

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Procesando..." : (productToEdit ? "Actualizar" : "Enviar")}
          </button>
        </form>
      </div>
    </div>
  );
}

