import React, { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'

const Navbar2 = () => {
  const [theme] = useContext(PostDataContext)
  return (
    <div className='nav3'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3>Service</h3>
        <h3>{theme}</h3>
    </div>
  )
}

export default Navbar2