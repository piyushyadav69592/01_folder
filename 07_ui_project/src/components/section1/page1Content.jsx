import React from 'react'
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';

const Page1Content = () => {

    const content = [
        {
            id: 1,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos dolorem fugiat at necessitatibus, aut temporibus aperiam numquam maxime odio?",
            button: "Satisfaid",
            color:'blue',
            img:"https://images.unsplash.com/photo-1680809746461-459eaf28f409?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            id: 2,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos dolorem fugiat at necessitatibus, aut temporibus aperiam numquam maxime odio?",
            button: "Underserved",
            color:'green',
            img:"https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=367&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            id: 3,
            number: 3,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos dolorem fugiat at necessitatibus, aut temporibus aperiam numquam maxime odio?",
            button: "underbanked",
            color:'red',
            img:"https://images.unsplash.com/photo-1780395533405-ab62cab87246?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            id: 4,
            number: 4,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos dolorem fugiat at necessitatibus, aut temporibus aperiam numquam maxime odio?",
            button: "Trusted!!",
            color:'blue',
            img:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
      
    ]

    return (
        <div className='flex gap-5 mx-16 my-4 h-[80vh]'>
            <Rightcontent />
            <div className='hide-scrollbar flex flex-1 gap-5 overflow--x-auto overflow-y-hidden flex-nowrap'>
                {content.map((item) => (
                    <div key={item.id} className='shrink-0'>
                        <Leftcontent id={item.id} content={item.content} img={item.img} button={item.button} color={item.color} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page1Content;