import React, { createContext, useContext, useEffect, useState } from "react";
import { useDataContext } from "./DataProvider";

const userContext = createContext();

export const useUserContext = () => {
  return useContext(userContext);
};
const UserProvider = ({ children }) => {
  const { users } = useDataContext();
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [userDetails, setUserDetails] = useState(() => {
    const storedDetails = localStorage.getItem("userDetails");
    return storedDetails ? JSON.parse(storedDetails) : "";
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
  }, [user, users]);
  useEffect(() => {
    if (userDetails) {
      if (users) {
        // console.log("user details has changed so: old:", userDetails);
        let Id = userDetails.id;
        const updatedUser = users.find((user) => user.id === userDetails.id);

        if (updatedUser) {
          setUserDetails(updatedUser); // Update `userDetails` with the latest data
        }
      }
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    } else {
      localStorage.removeItem("userDetails");
    }
  }, [userDetails, users]);

  const checkCredentials = (email, password) => {
    return users.find(
      (user) => user.email == email && user.password == password
    );
  };
  return (
    <userContext.Provider
      value={{ user, setUser, checkCredentials, userDetails, setUserDetails }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
