import React from 'react'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Coursedetail from './pages/Coursedetail'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:id' element={<Coursedetail />} />

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App