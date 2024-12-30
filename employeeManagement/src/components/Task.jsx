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
        <div className="flex  gap-6">
          <p className="border-2 px-2 py-0.5 text-black bg-gray-400 rounded-md" >
            {props.task.category}
          </p>
          <p className="border-2 px-2 py-0.5 text-black bg-gray-400 rounded-md">
            {props.task.state}
          </p>
        </div>
        <p>{props.task.date}</p>
      </div>
      <div className="flex justify-between w-full">
        <h2 className="text-xl">{props.task.title}</h2>
        {props.task.state === "newTask" ? (
          <button
            className="border-2 px-2 cursor-pointer"
            onClick={markAsActive}
            // onClick={displayMsg}
          >
            {" "}
            Mark as active
          </button>
        ) : props.task.state === "active" ? (
          <div className="flex gap-3">
            <button
              className="border-2 rounded-full h-7 w-7 bg-green-400"
              onClick={markAsCompleted}
            >
              ✔
            </button>
            <button
              className="border-2 rounded-full h-7 w-7 bg-red-400"
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
          <p className="bg-gray-300 p-3 rounded-md w-full">
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
