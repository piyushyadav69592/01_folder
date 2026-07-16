import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10 justify-center items-center text-xl'>
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
        <Link to="/product/kids">Kid's</Link>
      </div>
      {/* <h1>Product </h1> */}
      <Outlet />
    </div>
  )
}

export default Product