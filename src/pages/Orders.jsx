import React from "react";
import { ClientNavbar } from "../components/Cliente/ClientNavbar";

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
    <>
      <div className="container d-flex justify-content-center pt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Total</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-danger">Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
