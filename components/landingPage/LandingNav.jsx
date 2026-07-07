import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full h-16 px-2 md:px-5 border-b border-slate-100 bg-[#1B1B1B] text-white sticky top-0 backdrop-blur '>

      <span className="text-xl md:3xl font-bold tracking-tight">
        Workflow <span className="text-cyan-400">Pro</span>
      </span>

      <div className='flex gap-6 '>
        <button className='p-2 rounded-2xl text-sm md:text-lg  border border-white/40 font-medium backdrop-blur-sm
               hover:bg-white hover:text-blue-900 hover:border-white
                hover:shadow-lg hover:scale-105 transition-all duration-300"
            '>Login </button>
        <button className='border-1 p-2 rounded-2xl  text-sm md:text-lg bg-gradient-to-r from-cyan-400 to-blue-500
              hover:from-cyan-500 hover:to-blue-600
               hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
               hover:scale-105 active:scale-95
               transition-all duration-300
             '>Signup </button>
      </div>

    </nav>
  )
}

export default Navbar
