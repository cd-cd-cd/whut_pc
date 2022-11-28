import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import InitInfo from './pages/InitInfo'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/init' element={<InitInfo/>}></Route>
        {/* <Route path='*' element={<Navigate to='/register'/>}></Route> */}
        <Route path='*' element={<Navigate to='/init'/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
