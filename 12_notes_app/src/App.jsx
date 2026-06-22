import React from 'react'
import { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("hello notes")
    alert("Thank you to enter a some word")

  }
  const [Heading, setHeading] = useState("write something...")
  const [paragraph, setParagraph] = useState("Enter your discription...")
  const headingchange = (e) => {
    setHeading(e.target.value)
    
  }
  const paragraphchange = (e) => {
    setParagraph(e.target.value)
  }

  return (
    <div >
      <form action="" onSubmit={submitHandler} className="flex flex-row gap-4 p-5 ">
        <div className="flex flex-col w-1/3" justify-between>
          <input type="text"  onChange={headingchange} placeholder="Enter a note..." className="border-2 p-3 my-5 rounded-2xl" />
          <textarea type="text"  onChange={paragraphchange} placeholder="Enter a detail" className="border-2 p-3 h-30  my-2 rounded-2xl" />
          <button type='submit' className="border-1  active:scale-95  text-lg font-bold  p-3 my-5 bg-blue-500 rounded-2xl">Add Note</button>

        </div>
        <div className='relative h-full '>
          <img className="w-full z-0 h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1602629978851-125a3b62f3d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className=" absolute  inset-0">
            <h1 className='text-5xl text-shadow-lg/20 font-bold p-10 text-center'>{Heading}</h1>
            <div className=" mx-74 my-8   h-70 w-70 ">
              <p className='text-shadow-lg/10 text-xl'>{paragraph} </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App 