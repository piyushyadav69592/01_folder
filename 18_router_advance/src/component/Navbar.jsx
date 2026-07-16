import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-5 py-5 item-center justify-between bg-cyan-900 text-xl font-bold'>
        <h2>PY-Tech</h2>
        <div className='flex gap-10'>
            <Link to='/' >Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/product'>Product</Link>
        </div>

    </div>
  )
}

export default Navbar