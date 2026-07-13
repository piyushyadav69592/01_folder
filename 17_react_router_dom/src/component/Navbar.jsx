import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <h3>Piyush Yadav</h3>
                <div >
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contect</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar