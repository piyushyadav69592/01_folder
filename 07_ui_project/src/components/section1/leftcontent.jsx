import React from 'react'
import { ArrowRight } from 'lucide-react';


const Leftcontent = (props) => {
    return (
        <div className=' text-white bg-cover h-full   relative   rounded-3xl w-70'>
            <div
                className="absolute inset-0 blur-[1px]  rounded-3xl z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${props.img})` }}
            ></div>

            <div className='px-6 h-full w-full relative z-10  flex justify-between flex-col py-4'>
                <h2 className='text-2xl font-normal flex justify-center items-center font-500 bg-gray-200 text-black rounded-full w-10 h-10 text-center'>{props.id}</h2>

                <p className='text-xl mt-22  leading-[1.1]'> {props.content}

                </p>
                <div className='mb-5 flex justify-between '>
                    <button style={{ backgroundColor: props.color }} className='h-10 font-400 flex items-center justify-center   text-xl rounded-full w-40'> {props.button} </button>
                    <button className='h-10 rounded-full w-10 bg-blue-500 text-white flex items-center justify-center'> <ArrowRight /> </button>
                </div>

            </div>
        </div>
    )
}

export default Leftcontent;