import React, { createContext } from 'react'
export const PostDataContext = createContext()
import  { useState } from 'react'

const ThemeContext = (props) => {
    const [theme,setTheme]=useState('light')

    return (
        <div>
            <PostDataContext.Provider value={[theme,setTheme]}>
                {props.children}
            </PostDataContext.Provider>
        </div>
    )
}

export default ThemeContext