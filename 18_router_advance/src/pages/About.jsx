import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>{
        navigate('/')
      }}
       className='bg-blue-500 text-white px-4 py-2 m-5 rounded'>
        Go to Home
      </button>
      <button onClick={()=>{
        navigate(-1)
      }} 
      className='bg-blue-500 text-white px-4 py-2 m-5 rounded'>
        Go Back
      </button>
      <button onClick={()=>{
        navigate(+1)
      }} 
      className='bg-blue-500 text-white px-4 py-2 m-5 rounded'>
        Go next
      </button>
    </div>
  )
}

export default About