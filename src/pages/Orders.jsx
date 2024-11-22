import React from "react";

export const Orders = () => {
  const orders = [
    {
      id: 1,
      total: 100,
      status: "Entregado",
    },
    {
      id: 2,
      total: 200,
      status: "En camino",
    },
    {
      id: 3,
      total: 300,
      status: "En camino",
    },
  ];

  return (

    <div className="container">
      <br />
      <h1 className="text-center mt-5">Mis compras</h1>
      <div className="container d-flex justify-content-center pt-5">
        
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
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-outline-danger">Detalles</button>
                </td>
                <td>
                  <button className="btn btn-outline-success">Reseña</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
