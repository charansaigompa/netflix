import React from 'react'

const ShimmerForVideo = () => {
  return (
   <div className="relative w-screen aspect-video bg-zinc-900 overflow-hidden">

  {/* Base background */}
  <div className="absolute inset-0 bg-zinc-900" />

  {/* Shimmer layer */}
  <div
    className="absolute inset-0
               bg-gradient-to-r
               from-zinc-900 via-zinc-700/40 to-zinc-900
               animate-pulse"
  />

  {/* Play button (TOP LAYER) */}
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div
      className="w-20 h-20 rounded-full
                 bg-zinc-800/80
                 backdrop-blur-sm
                 flex items-center justify-center
                 animate-pulse"
    >
      {/* Play triangle */}
      <div
        className="ml-1
                   w-0 h-0
                   border-t-[14px] border-t-transparent
                   border-b-[14px] border-b-transparent
                   border-l-[22px] border-l-zinc-300"
      />
    </div>
  </div>

</div>

  )
}

export default ShimmerForVideo
