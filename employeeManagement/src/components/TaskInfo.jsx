import React from "react";
import { getColor } from "./Task";

const TaskInfo = (props) => {
  const handleClick = () => {
    if (props.opened != props.task.taskId) props.setOpened(props.task.taskId);
    else props.setOpened(null);
  };
  return (
    <div
      className="p-3 flex  gap-3 border-2 rounded text-black w-full flex-col cursor-pointer"
      onClick={handleClick}
      style={{ background: getColor(props.task.state) }}
    >
      <div className="flex w-full ">
        <p>{props.task.to}</p>
        <p className="flex-grow flex justify-center ">{props.task.title}</p>
        <div className="flex gap-3">
          <p className="border-2 px-2 py-0.5 text-black bg-gray-400 rounded-md">
            {props.task.category}
          </p>
          <p className="border-2 px-2 py-0.5 text-black bg-gray-400 rounded-md">
            {props.task.state}
          </p>
        </div>
      </div>

      {props.opened === props.task.taskId ? (
        <p className="bg-gray-300 p-3 rounded-md"> {props.task.description}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskInfo;
