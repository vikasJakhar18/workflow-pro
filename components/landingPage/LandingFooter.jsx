import React from 'react'

const LandingFooter = () => {
  return (
    <div>
      <section className="mt-24 bg-[#1B1B1B] border-t border-white/10">
  <div className="max-w-4xl mx-auto px-6 py-15 flex flex-col items-center text-center">

    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
      Ready to organize your team?
    </h2>

    <p className="mt-5 max-w-2xl text-gray-400 text-base md:text-lg leading-8">
      Join thousands of teams managing employees, departments, and workflows
      with Workflow Pro.
    </p>

    <button
      className="mt-10 px-8 py-3 rounded-xl bg-cyan-500 text-white font-semibold
      hover:bg-cyan-400 hover:scale-105
      hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]
      active:scale-95 transition-all duration-300"
    >
      Get Started Free
    </button>

  </div>
</section>
     
    </div>
  )
}

export default LandingFooter
