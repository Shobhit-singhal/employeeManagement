import React, { useState } from "react";
import { useUserContext } from "../context/UserProvider";


const Login = () => {
  const {setUser,checkCredentials,setUserDetails}=useUserContext();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checked:",checkCredentials(email,pass));
    let data=checkCredentials(email,pass);
    if(data){
      setUser(data.role)
      setUserDetails(data);
    }else{
      alert('Invalid Credentials');
    }
    setEmail("");
    setPass("");
  };

  return (

      <form
        onSubmit={handleSubmit}
        className="p-28 border-2 rounded-xl border-emerald-600 flex flex-col gap-5 justify-center items-center"
      >
        <div className="flex flex-col items-start w-full">
          <label htmlFor="emailInput">Enter Email:</label>
          <input required
            className="rounded border-2 border-emerald-500 px-3 py-2 w-full"
            type="email"
            id="emailInput"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col items-start w-full ">
          <label htmlFor="passInput">Enter Password:</label>
          <input required
            className=" px-2 py-2 w-full rounded border-2 border-emerald-500"
            type="password"
            id="passInput"
            placeholder="Enter your password here..."
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            className="bg-emerald-500 px-6 py-2 rounded-full text-black"
          />
        </div>
      </form>
  );
};

export default Login;
