import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Navigate to='/register'/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
