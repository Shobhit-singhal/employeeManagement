import React from 'react'

const TaaskStats = (props) => {
  return (
    <div className='border-2 py-1 w-[48%] h-20 rounded-md flex flex-col items-start justify-center px-3 gap-3 bg-transparent
    md:w-[20%] md:h-32'
    style={props.styles}
    >
      <h1 className='font-bold text-xl md:text-2xl text-slate-300'>{props.val}</h1>
      <h2 className='font-semibold text-md md:text-xl text-slate-950'>{props.for}</h2>
    </div>
  )
}

export default TaaskStats
