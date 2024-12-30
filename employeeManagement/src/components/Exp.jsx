import { ToastContainer, toast } from "react-toastify";
import React from "react";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

const Exp=()=> {
  const displayMsg = () => {
    toast(Msg);
    // toast(<Msg />) would also work
  };

  return (
    <div>
      <button onClick={displayMsg}>Click me</button>
      <ToastContainer />
    </div>
  );
}

export default Exp;
