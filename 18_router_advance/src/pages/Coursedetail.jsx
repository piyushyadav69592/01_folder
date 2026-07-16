import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {
    const param = useParams()
    console.log(param)
  return (
    <div>
        <h1>{param.id} - Course Detail</h1>
    </div>
  )
}

export default Coursedetail