import React from 'react'

const TaaskStats = (props) => {
  return (
    <div className='border-2 py-3 w-[49%]  rounded-md flex flex-col items-start px-3 gap-3 bg-transparent '
    style={props.styles}
    >
      <h1 className='font-bold text-2xl'>{props.val}</h1>
      <h2 className='font-semibold text-xl'>{props.for}</h2>
    </div>
  )
}

export default TaaskStats
