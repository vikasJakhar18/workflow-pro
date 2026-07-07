import React from 'react'
import Image from "next/image";

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-[#0B0B0B]">
  <div className="max-w-6xl mx-auto px-6">

    <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
      <Image
        src="/dashboard.png"
        alt="Workflow Dashboard"
        width={1400}
        height={900}
        className="w-full h-auto"
      />
    </div>

  </div>
</section>
  )
}

export default DashboardPreview
