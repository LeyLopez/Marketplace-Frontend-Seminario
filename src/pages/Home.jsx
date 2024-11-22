import { useContext } from "react";
import { SellerProducts } from "../components/Seller/SellerProducts";
import { UserContext } from "../context/UserContext";


export const Home = () => {

  const {user} = useContext(UserContext);

  return (
    <>  
      {user.rol === "VENDEDOR" ? <SellerProducts title={'Mis productos'}/> : <SellerProducts title={'Productos'}/>}
    </>
  );
};
