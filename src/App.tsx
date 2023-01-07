import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import InitInfo from './pages/InitInfo'
import Home from './pages/Home'
import { IRecord } from './libs/model'
import { StoreProvider } from './hooks/store'

function App () {
  const [PostList, setPostList] = useState<IRecord[]>([])
  const [categoryId, setCategoryId] = useState<number>(-1)
  return (
    <StoreProvider value={{
      PostList,
      setPostList,
      categoryId,
      setCategoryId
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/init' element={<InitInfo />}></Route>
          <Route path='/home' element={<Home />}></Route>
          {/* <Route path='*' element={<Navigate to='/register'/>}></Route> */}
          <Route path='*' element={<Navigate to='/home' />}></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
