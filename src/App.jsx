import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { RecoverPassword } from './pages/RecoverPassword'

function App() {


  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/recoverpassword' element={<RecoverPassword></RecoverPassword>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
