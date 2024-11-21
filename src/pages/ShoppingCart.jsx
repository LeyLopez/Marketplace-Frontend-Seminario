import React from "react";
import { ClientNavbar } from "../components/Cliente/ClientNavbar";

export const ShoppingCart = () => {
  const listaCompras = [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      nombre: "Producto 1",
      descripcion: "Descripción del producto 1",
      precio: 100,
      cantidad: 2,
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      nombre: "Producto 2",
      descripcion: "Descripción del producto 2",
      precio: 200,
      cantidad: 3,
    },
  ];

  return (
    <>
      <ClientNavbar></ClientNavbar>
      <h1 className="text-center mt-5">Carrito de compras</h1>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Img</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map(() => {
            return (
              <tr>
                <td>{listaCompras.img}</td>
                <td>{listaCompras.nombre}</td>
                <td>{listaCompras.descripcion}</td>
                <td>{listaCompras.precio}</td>
                <td>{listaCompras.cantidad}</td>
                <td>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>

        {/* <th>
          <b>Total</b>
        </th>
        <td></td>
        <td></td>
        <td>${calcularTotal()}</td> */}
      </table>

      <div className="container">
        <div className="d-flex justify-content-center pt-5">
          <button
            className="btn btn-primary w-40 py-2"
            // onClick={handleImpresion}
            // disabled={listaCompras < 1}
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};
