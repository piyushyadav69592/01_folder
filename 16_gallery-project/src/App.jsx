import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`)
    console.log(response.data)
    setUserdata(response.data)
  }

  useEffect(function () {
    getdata()
  }, [index])



  let printtUserData = "Please wait Loding........."

  if (userdata.length > 0) {
    printtUserData = userdata.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-50 w-100 overflow-hidden rounded-xl bg-white shadow-xl '>
            <img className='h-full w-full   object-cover' src={elem.download_url} alt="" />
          </div>
          <h1>{elem.author}</h1>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-sreen w-screen text-white'>
      <h2 className='bg-amber-400 p-2 text-xl  w-30 fixed'>Page {index}</h2>
      <div className='flex  flex-wrap shadow-white-500/10  justify-center py-10 gap-10'>
        {printtUserData}
      </div>

      <div className='flex justify-center item-center p-4'>
        <button
        style={{opacity:index==1?0.5:1}}
        onClick={()=>{
          console.log("next value",index)
          if(index>1){
            setIndex(index - 1)
            setUserdata([])
          }
        }}
          className='bg-blue-500 text-black rounded px-4 py-3 mx-5  active:scale-95 font-bold'
        >Previus</button>
        <button
        onClick={()=>{
          console.log("previus value",index)
          setIndex(index + 1)
          setUserdata([])
        }}
          className='bg-blue-500 text-black rounded px-4 py-3 mx-5  active:scale-95 font-bold'
        >Next</button>
      </div>
    </div>
  )
}

export default App