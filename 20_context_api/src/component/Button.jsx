import React, { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'

const Button = () => {
  const [theme, setTheme] = useContext(PostDataContext)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Button