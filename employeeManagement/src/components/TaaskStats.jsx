import React from 'react'

const TaaskStats = (props) => {
  return (
    <div className='border-2 py-3 w-[48%]  rounded-md flex flex-col items-start px-3 gap-3 bg-transparent '
    style={props.styles}
    >
      <h1 className='font-bold text-2xl text-gray-600'>{props.val}</h1>
      <h2 className='font-semibold text-xl text-black'>{props.for}</h2>
    </div>
  )
}

export default TaaskStats
