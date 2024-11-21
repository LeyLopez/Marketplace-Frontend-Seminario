import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { RecoverPassword } from './pages/RecoverPassword'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'
import { Orders } from './pages/Orders'
import { DeleteAccount } from './pages/DeleteAccount'

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/recoverpassword' element={<RecoverPassword></RecoverPassword>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shoppingcart' element={<ShoppingCart></ShoppingCart>}></Route>
        <Route path='/deleteaccount' element={<DeleteAccount></DeleteAccount>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
