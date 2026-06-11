import React from 'react'
import Navbar from './navbar'
import Page1Content from './page1Content';

const Section = () => {
  return (
    <div className='h-screen w-full'>
        <Navbar></Navbar>
        <Page1Content></Page1Content>
    </div>
  )
}

export default Section;