import React from 'react'
import { getColor } from './Task'

const TaskInfo = (props) => {
  return (
    <div className='p-3 flex justify-between border-2 rounded'

    style={{background:getColor(props.task.state)}}
    >
      <p>{props.task.to}</p>
      <p>{props.task.title}</p>
      <p>{props.task.category}</p>
    </div>
  )
}

export default TaskInfo
