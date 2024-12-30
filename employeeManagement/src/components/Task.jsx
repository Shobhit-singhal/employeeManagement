import React, { useEffect } from "react";
import { useDataContext } from "../context/DataProvider";
import { useUserContext } from "../context/UserProvider";

export const getColor = (state) => {
  if (state === "active") {
    return "#2b9eb3";
  } else if (state === "completed") {
    return "#44af69";
  } else if (state === "failed") {
    return "#f8333c";
  } else {
    return "#fcab10";
  }
};

const Task = (props) => {
  const { users, setUsers, changeState } = useDataContext();
  const { userDetails } = useUserContext();

  const markAsActive = () => {
    let userID = userDetails.id;
    let taskID = props.task.taskId;
    changeState(userID, taskID, "active");
  };
  const markAsCompleted = () => {
    let userID = userDetails.id;
    let taskID = props.task.taskId;
    changeState(userID, taskID, "completed");
  };
  const markAsFailed = () => {
    let userID = userDetails.id;
    let taskID = props.task.taskId;
    changeState(userID, taskID, "failed");
  };
  const handleClick = (e) => {
    if (e.target.tagName.toLowerCase() != "button") {
      if (props.opened != props.task.taskId) props.setOpened(props.task.taskId);
      else props.setOpened(null);
    }
  };

  return (
    <div
      className="flex flex-col p-3  border-2 rounded-xl items-start text-start gap-3 text-black"
      onClick={handleClick}
      style={{ background: getColor(props.task.state) }}
    >
      <div className="flex justify-between w-full ">
        <div className="flex  gap-2 flex-col md:flex-row md:gap-4">
          <p className="border-2 px-2 text-sm text-center text-black bg-gray-400 rounded-md" >
            {props.task.category}
          </p>
          <p className="border-2 px-2 text-sm text-center text-black bg-gray-400 rounded-md">
            {props.task.state}
          </p>
        </div>
        <p className="flex items-center text-sm text-slate-700"
        >{props.task.date}</p>
      </div>
      <div className="flex justify-between w-full">
        <h2 className="text-md md:text-xl">{props.task.title}</h2>
        {props.task.state === "newTask" ? (
          <button
            className="border-2 text-sm cursor-pointer px-1"
            onClick={markAsActive}
            // onClick={displayMsg}
          >
            {" "}
            Mark as active
          </button>
        ) : props.task.state === "active" ? (
          <div className="flex gap-2">
            <button
              className="border-2 rounded-full h-6 w-6 text-sm leading bg-green-400"
              onClick={markAsCompleted}
            >
              ✔
            </button>
            <button
              className="border-2 rounded-full h-6 w-6 text-sm bg-red-400"
              onClick={markAsFailed}
            >
              X
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {props.opened === props.task.taskId ? (
        <>
          <p className="bg-gray-300 p-3 rounded-md text-sm md:text-lg w-full">
            {props.task.description}
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Task;
