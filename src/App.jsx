import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Home from './pages/Home'
import Create from './pages/Create'
import View from './pages/View'
import Update from './pages/Update'
import Landing from './pages/Landing'
import { Route,Routes } from 'react-router-dom'



function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
    </>
  )
}

export default App
