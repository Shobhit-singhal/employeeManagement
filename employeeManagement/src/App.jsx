import { useEffect, useState } from "react";
import "./App.css";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import { useUserContext } from "./context/UserProvider";

function App() {
  const {user,userDetails}=useUserContext();
  if (user === "") {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Login/>
      </div>
    );
  } else if (user === "employee") {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <UserDashboard />
      </div>
    );
  } else if(user=== 'admin'){
    return (
      <div className="h-full flex justify-center items-center">
        <AdminDashboard />
      </div>
    );
  }
  // return(<Exp/>)
}

export default App;
