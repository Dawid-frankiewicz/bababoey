import { useState } from 'react'


import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './Home'
import { Store } from './Store'
import { About } from './About'
import { Navbar } from './Navbar'
import { ShoppingCartProvider } from './ShoppingCartContext'
function App() {

//  {/* //stan i funkcje koszyka sa dostepne dla calej aplikacj
  return (
  <>
  <ShoppingCartProvider>
     
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
  )
}

export default App
