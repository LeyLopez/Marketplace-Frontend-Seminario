import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/styles.css";
import { UserContext } from "../../context/UserContext";
import { ShoppingCartContext } from "../../context/ShoppingCartProvider";


export function Products() {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addItem } = useContext(ShoppingCartContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addItem(product);
  }

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="ContainerProducts">
      {products.map((product) => (
        <div className="divProduct" key={product.id}>
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
              <div className="div" style={{ alignSelf: "center", marginBottom: "15px" }}>
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
                onClick={() => handleAddToCart(product)}
              >
                Añadir al carrito
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
