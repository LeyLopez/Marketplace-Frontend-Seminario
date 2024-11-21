import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { RecoverPassword } from './pages/RecoverPassword'
import { Home } from './pages/Home'
import { ShoppingBag } from '@mui/icons-material'
import { ShoppingCart } from './pages/ShoppingCart'
import { Orders } from './pages/Orders'
import { FormAddProduct } from './components/Seller/FormAddProduct'

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/recoverpassword' element={<RecoverPassword></RecoverPassword>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cart' element={<ShoppingCart></ShoppingCart>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/addproduct' element={<FormAddProduct/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
