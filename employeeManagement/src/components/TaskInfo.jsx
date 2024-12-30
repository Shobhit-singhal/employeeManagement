import React from 'react'
import { getColor } from './Task'

const TaskInfo = (props) => {
  return (
    <div className='p-3 flex  border-2 rounded text-black w-full'

    style={{background:getColor(props.task.state)}}
    >
      <p>{props.task.to}</p>
      <p className='flex-grow flex justify-center'>{props.task.title}</p>
      <p>{props.task.category}</p>
    </div>
  )
}

export default TaskInfo
