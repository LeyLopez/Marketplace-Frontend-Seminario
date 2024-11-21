import "../src/styles/styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { RecoverPassword } from "./pages/RecoverPassword";
import { Home } from "@mui/icons-material";
import { NavbarProvider } from "./context/NavbarProvider";
import { SellerProducts } from "./pages/SellerProducts";
import { Orders } from "./pages/Orders";
import { ShoppingCart } from "./pages/ShoppingCart";
import { AddProduct } from "./pages/AddProduct";
import { DeleteProduct } from "./pages/DeleteProduct";
import { EditProduct } from "./pages/EditProduct";
import { UserProvider } from "./context/UserProvider";

export const App = () => {
  return (
    <UserProvider>
    <NavbarProvider>
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/recoverpassword" element={<RecoverPassword></RecoverPassword>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/productseller" element={<SellerProducts/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/deleteproduct" element={<DeleteProduct/>}></Route>
        <Route path="/editproduct" element={<EditProduct/>}></Route>

        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
    
    </NavbarProvider>
    </UserProvider>
  );
};
