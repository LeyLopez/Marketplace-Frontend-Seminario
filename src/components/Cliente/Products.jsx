import { useContext, useState } from "react";
import "../../assets/css/styles.css";
import { ShoppingCartContext} from "../../context/ShoppingCartProvider";

export function Products() {
  // Crear una lista de productos con datos en bruto
  const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "A high-end smartphone with 128GB storage",
      price: 799.99,
      availability: 30,
      status: "Available", // Estado en bruto
      category: "Electronics", // Categoría en bruto
      salesman: "John Doe",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
    {
      id: 2,
      name: "Laptop",
      description: "A powerful laptop with 16GB RAM and 512GB SSD",
      price: 1200.0,
      availability: 10,
      status: "Available", // Estado en bruto
      category: "Electronics", // Categoría en bruto
      salesman: "Jane Smith",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
    {
      id: 3,
      name: "Jacket",
      description: "A warm winter jacket",
      price: 120.5,
      availability: 50,
      status: "OutOfStock", // Estado en bruto
      category: "Clothing", // Categoría en bruto
      salesman: "John Doe",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
    {
      id: 4,
      name: "T-shirt",
      description: "Cotton t-shirt in various sizes",
      price: 19.99,
      availability: 100,
      status: "Available", // Estado en bruto
      category: "Clothing", // Categoría en bruto
      salesman: "Jane Smith",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
    {
      id: 5,
      name: "Smartphone",
      description: "A high-end smartphone with 128GB storage",
      price: 799.99,
      availability: 30,
      status: "Available", // Estado en bruto
      category: "Electronics", // Categoría en bruto
      salesman: "John Doe",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
    {
      id: 6,
      name: "Laptop",
      description: "A powerful laptop with 16GB RAM and 512GB SSD",
      price: 1200.0,
      availability: 10,
      status: "Available", // Estado en bruto
      category: "Electronics", // Categoría en bruto
      salesman: "Jane Smith",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
    {
      id: 7,
      name: "Jacket",
      description: "A warm winter jacket",
      price: 120.5,
      availability: 50,
      status: "OutOfStock", // Estado en bruto
      category: "Clothing", // Categoría en bruto
      salesman: "John Doe",
      image:
        "https://co.tiendasishop.com/cdn/shop/files/IMG-14858881_9965d00d-ee49-4da7-82b4-ba026aaca2ba.jpg?v=1726245776&width=823",
    },
  ];

  const [rol, setRol] = useState("Seller");

  const { addItem } = useContext(ShoppingCartContext);

  const handleAddToCart = (product) => {
    addItem(product);
  }

  return (
    <div className="ContainerProducts">
      {console.log(addItem)}
      {products.map((product) => (
        <div className="divProduct" key={product.id}>
          <div
            className="card"
            style={{
              width: "19rem",
              height: "22rem",
              display: "flex",
              flexDirection: "column",
            }
          }
          >
            <img
              src={product.image}
              className="card-img-top"
              style={{ height: "10rem", objectFit: "contain", margin: "5px" }}
            />
            <div
              className="card-body"
              style={{ height: "50%", objectFit: "cover" }}
            >
              <h5 className="card-title">{`${product.name} : ${product.price}`}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            {rol == "CLIENTE"
              ? (
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
                </div>)
               
              : (

                  <a
                    href="#"
                    className="btn btn-primary"
                    style={{ alignSelf: "center", marginBottom: "15px" }}
                    onClick={()=> handleAddToCart(product)}
                  >
                    Add to card
                  </a>
                )}
          </div>
        </div>
      ))}
    </div>
  );
}
