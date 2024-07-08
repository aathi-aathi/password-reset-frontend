
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './register'
import Login from './login'
import Home from './home'
import GmailVerification from './forgot-password'
import OtpInput from './get-otp'
import ResetPassword from './reset-password'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<Home/>}/>
        <Route path='/forgot-password' element={<GmailVerification/>}/>
        <Route path='/get-otp' element={<OtpInput/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
