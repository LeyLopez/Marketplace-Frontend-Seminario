import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductDetails } from "../components/Cliente/ProductDetails";

export const Orders = () => {
  const navigate = useNavigate();
  const orders = [
    {
      id: 1,
      total: 100,
      status: "Entregado",
      products: [
        {
          id: 1,
          name: "Smartphone",
          price: 50,
          quantity: 1,
          description: "A high-end smartphone with 128GB storage",
        },
        {
          id: 2,
          name: "Laptop",
          price: 50,
          quantity: 1,
          description: "A powerful laptop with 16GB RAM",
        },
      ],
    },
    {
      id: 2,
      total: 200,
      status: "En camino",
      products: [
        {
          id: 3,
          name: "Tablet",
          price: 200,
          quantity: 1,
          description: "10-inch tablet with 64GB storage",
        },
      ],
    },
    {
      id: 3,
      total: 300,
      status: "En camino",
      products: [
        {
          id: 4,
          name: "Headphones",
          price: 150,
          quantity: 2,
          description: "Wireless noise-cancelling headphones",
        },
      ],
    },
  ];

  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="container">
      <br />
      <h1 className="text-center mt-5">Mis compras</h1>
      <div className="container pt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Total</th>
              <th scope="col">Estado</th>
              <th scope="col">Ver</th>
              <th scope="col">Do it</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>${order.total}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === "Entregado"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => toggleDetails(order.id)}
                    >
                      {expandedOrder === order.id ? "Ocultar" : "Detalles"}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => navigate("/makereview")}
                      disabled={order.status !== "Entregado"}
                    >
                      Reseña
                    </button>
                  </td>
                </tr>
                {expandedOrder === order.id && (
                  <tr>
                    <td colSpan="5" className="p-0">
                      <ProductDetails products={order.products} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
