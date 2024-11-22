import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { RecoverPassword } from "./pages/RecoverPassword";
import { Home } from "./pages/Home";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Orders } from "./pages/Orders";
import { DeleteAccount } from "./pages/DeleteAccount";
import { FormAddProduct } from "./components/Seller/FormAddProduct";
import { SellerProducts } from "./components/Seller/SellerProducts";
import { UserProvider } from "./context/UserProvider";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";
import { Review } from "./pages/Review";
import { NavbarProvider } from "./context/NavbarProvider";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <UserProvider>
      <NavbarProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login></Login>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
              <Route
                path="/recoverpassword"
                element={<RecoverPassword></RecoverPassword>}
              ></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route
                path="/shoppingcart"
                element={<ShoppingCart></ShoppingCart>}
              ></Route>
              <Route
                path="/deleteaccount"
                element={<DeleteAccount></DeleteAccount>}
              ></Route>
              <Route path="/orders" element={<Orders></Orders>}></Route>
              <Route path="/addproduct" element={<FormAddProduct />}></Route>
              <Route path="/productseller" element={<SellerProducts />}></Route>
              <Route path="/makereview" element={<Review></Review>}></Route>
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </NavbarProvider>
    </UserProvider>
  );
}

export default App;
