import React from 'react'
import { ArrowUpRight } from "lucide-react";


const Rightcontent = () => {
    return (
        <div className=' w-90 h-full '>
            <div className='flex flex-col py-12  h-full '>
                <div className='mx-4'>
                    <h1 className='text-4xl mb-10 leading-[1.2] font-bold'>Prospective <span className='bg-gray-200 rounded-full px-3 m  '>Customer</span>  Segmentation</h1>
                </div>
                <div className='mx-5' flex h-full justify-between >
                    <p className='text-xl mb-27 font-light  font-sans'>Depenting on customer setisfaction and access to banking product potential prodect target audience can be divided on three groups</p>
                    <ArrowUpRight size={50} strokeWidth={4} absoluteStrokeWidth />
                </div>
            </div>

        </div>
    )
}

export default Rightcontent;