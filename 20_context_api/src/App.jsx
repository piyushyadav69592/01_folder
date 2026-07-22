import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import Button from './component/Button'
import { PostDataContext } from './context/ThemeContext'

const App = () => {
  const [theme] = useContext(PostDataContext)

  return (
    <div className='app'>
      <div className={theme}>
        <Navbar />
      </div>
      <Button />
    </div>
  )
}

export default App