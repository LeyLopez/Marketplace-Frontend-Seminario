import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { RecoverPassword } from './pages/RecoverPassword'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'
import { Orders } from './pages/Orders'
<<<<<<< HEAD
import { DeleteAccount } from './pages/DeleteAccount'
=======
import { FormAddProduct } from './components/Seller/FormAddProduct'
import { SellerProducts } from './components/Seller/SellerProducts'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { ClientNavbar } from './components/Cliente/ClientNavbar'
import { SellerNavbar } from './components/Seller/SellerNavbar'
import { UserProvider } from './context/UserProvider'
import { Header } from './components/Header'
>>>>>>> 39b5c5a874ee5648ff453d3b902fe6333c35d30c

function App() {

 

  return (
    <UserProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/recoverpassword' element={<RecoverPassword></RecoverPassword>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shoppingcart' element={<ShoppingCart></ShoppingCart>}></Route>
        <Route path='/deleteaccount' element={<DeleteAccount></DeleteAccount>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/addproduct' element={<FormAddProduct/>}></Route>
        <Route path='/productseller' element={<SellerProducts/>}></Route>

      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App;
