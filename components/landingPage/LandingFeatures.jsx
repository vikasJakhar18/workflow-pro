import React from 'react'
import { Users, Search, Building2 } from "lucide-react";

const LandingFeatures = () => {


const features=[
  {
    icon:Users ,
    title:"Centralized Employee Records",
    content:"Every profile, contact detail, and role in one searchable place."
  },
  {
     icon:Search  ,
    title:"Powerful Search & Filters",
    content:"Find anyone in seconds with filters by department, status, or date."
  },
  {
     icon:Building2  ,
    title:"Effortless Department Management",
    content:"Organize your org into departments and track headcount at a glance."
  }
]

  return (
    <div className=' grid grid-cols-1 md:grid-cols-3'>

      {features.map((item,idx)=>{
         const Icon = item.icon;
        return (
        
           
           <div
           key={idx}
            className='mt-15 max-w-6xl mx-auto px-5'>
              
            <div className='border-1 rounded-xl w-12 h-12 md:w-16 md:h-16 p-2 flex justify-center items-center '>
               <Icon className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />
            </div>
            <div  className='mt-3'>
              <h1 className=' text-lg md:text-xl font-bold '>{item.title}</h1>
              <p className='mt-2 text-sm md:text-lg text-gray-400'>{item.content}</p>
            </div>
           </div>
           

        )
      })}
      
    </div>
  )
}

export default LandingFeatures
