import React from 'react'

const ShimmerForVideo = () => {
  return (
       <div className="relative w-screen aspect-video bg-zinc-900 overflow-hidden">
      
      
      <div className="absolute inset-0 bg-zinc-900" />

      
      <div
        className="absolute inset-0 bg-linear-to-r
                   from-zinc-900 via-zinc-700/40 to-zinc-900
                   animate-pulse"
      />

    
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-zinc-700/70 
                        flex items-center justify-center">
          <div className="w-0 h-0 
                          border-t-14px border-t-transparent
                          border-b-14px border-b-transparent
                          border-l-22px border-l-zinc-500 ml-1" />
        </div>
      </div>

    </div>
  )
}

export default ShimmerForVideo
