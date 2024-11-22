import React, { useContext } from "react";
import { ClientNavbar } from "../components/Cliente/ClientNavbar";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";

export const ShoppingCart = () => {
  // const itemOrder = [
  //   {
  //     id: 1,
  //     img: "https://via.placeholder.com/150",
  //     nombre: "Producto 1",
  //     descripcion: "Descripción del producto 1",
  //     precio: 100,
  //     cantidad: 1,
  //   },
  //   {
  //     id: 2,
  //     img: "https://via.placeholder.com/150",
  //     nombre: "Producto 2",
  //     descripcion: "Descripción del producto 2",
  //     precio: 200,
  //     cantidad: 1,
  //   },
  //   {
  //     id: 3,
  //     img: "https://via.placeholder.com/150",
  //     nombre: "Producto 3",
  //     descripcion: "Descripción del producto 3",
  //     precio: 300,
  //     cantidad: 1,
  //   },

  // ];

  const calcularTotal = () => {
    return orderItem.reduce((total, item)=> total+item.price*item.cantidad, 0).toFixed(2)
 }

  const { orderItem, deleteItem, increase, decrease } =
    useContext(ShoppingCartContext);

  return (
    <>
      <div className="container">
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
            {orderItem.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn" onClick={() => decrease(item.id)}>
                    -
                  </button>
                  <button className="btn">{item.cantidad}</button>
                  <button className="btn" onClick={() => increase(item.id)}>
                    +
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <th>
            
          <b>Total</b>
        </th>
        <td></td>
        <td></td>
        <td>${calcularTotal()}</td>
        </table>
            <br /><br />
        <div className="container">
          <div className="d-flex justify-content-center pt-5">
            <button
              className="btn btn-primary w-40 py-2"
              // onClick={handleImpresion}
               disabled={orderItem < 1}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
