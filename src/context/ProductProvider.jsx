import { createContext } from "react";

export const ProductoContext = createContext();

export const ProductosProviders = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    // const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductoContext.Provider value={{productos}}>{children}</ProductoContext.Provider>
  );
};
