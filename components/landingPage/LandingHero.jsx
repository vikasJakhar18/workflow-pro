import React from 'react'

const LandingHero = () => {
  return (
    <div className='mt-25 "min-h-screen flex flex-col items-center justify-center text-center text-white'>
      
     <div className='md:max-w-5xl mx-auto text-center'>
       <span className=' p-4 text-sm md:text-lg text-[#B094FF] rounded-4xl bg-[#21252E] '>Employee & Team Management</span>
      <h1 className='mt-3 md:mt-8 p-5  text-3xl md:text-6xl font-bold leading-10 md:leading-14'>The team management tool your spreadsheet wishes it was</h1>
      <p className=' mt-3 md:mt-5 px-5 text-lg md:text-xl text-gray-400 md:max-w-3xl mx-auto'>WorkFlow Pro brings your employees, departments, and team activity into one 
        clean, fast dashboard.</p>
     </div>

       <div className='mt-8 flex justify-center gap-4'>
        <button className='px-4 py-2 md:px-6 md:py-3 bg-cyan-500 rounded-lg text-white
         hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
          active:scale-95
          transition-all duration-300 ease-out"
        '>Get started free</button>
          <button className='px-4 py-2 md:px-6 md:py-3 border border-gray-600 rounded-lg text-white
          hover:border-slate-300 active:scale-95'> view Demo</button>
       </div>

    </div>
  )
}

export default LandingHero
