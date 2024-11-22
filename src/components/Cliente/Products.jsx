import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/styles.css";
import { UserContext } from "../../context/UserContext";
import { ShoppingCartContext } from "../../context/ShoppingCartProvider";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  const { addItem } = useContext(ShoppingCartContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8088/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los productos");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  const closeModal = () => {
    setSelectedProduct(null); // Limpia el producto seleccionado para cerrar el modal
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="ContainerProducts">
      {products.map((product) => (
        <div
          className="divProduct"
          key={product.id}
          onClick={() => handleProductClick(product)} // Hacer clic en el producto abre el modal
          style={{ cursor: "pointer" }}
        >
          <div
            className="card"
            style={{
              width: "19rem",
              height: "22rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={product.image}
              className="card-img-top"
              style={{ height: "10rem", objectFit: "contain", margin: "5px" }}
              alt={product.name}
            />
            <div
              className="card-body"
              style={{ height: "50%", objectFit: "cover" }}
            >
              <h5 className="card-title">{`${product.name} : $${product.price}`}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            {user.rol === "VENDEDOR" ? (
              <div
                className="div"
                style={{ alignSelf: "center", marginBottom: "15px" }}
              >
                <a
                  href="#"
                  className="btn btn-warning"
                  style={{ margin: "5px" }}
                >
                  Editar
                </a>
                <a
                  href="deleteproduct"
                  className="btn btn-danger"
                  style={{ margin: "5px" }}
                >
                  Eliminar
                </a>
              </div>
            ) : (
              <a
                href="#"
                className="btn btn-primary"
                style={{ alignSelf: "center", marginBottom: "15px" }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevenir que el clic abra el modal
                  handleAddToCart(product);
                }}
              >
                Añadir al carrito
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
          >
            <button
              className="close-modal"
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: "100%", height: "auto", marginBottom: "20px" }}
            />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Precio:</strong> ${selectedProduct.price}
            </p>
            <p>
              <strong>Vendedor:</strong> ${selectedProduct.salesman.namegit}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => window.open(`https://wa.me/57${selectedProduct.salesman.phone}?text=${encodeURIComponent(`Hola, estoy interesado en el producto ${selectedProduct.name}`)}`, "_blank")} // Redirige a WhatsApp con el número y mensaje del salesman
            >
              Contactar vendedor
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
