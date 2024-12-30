import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const allUser = [
  {
    id: 1,
    firstName: "John",
    email: "1@abc.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        taskId: 101,
        title: "Develop Login Page",
        date: "2024-01-01",
        category: "Development",
        description: "Design and implement the login page for the application.",
        state: "active",
      },
      {
        taskId: 102,
        title: "Test User Authentication",
        date: "2024-01-02",
        category: "Testing",
        description: "Perform end-to-end testing for user authentication.",
        state: "completed",
      },
      {
        taskId: 103,
        title: "Fix Login Bug",
        date: "2024-01-03",
        category: "Bug Fix",
        description:
          "Resolve the bug causing login failures for certain users.",
        state: "failed",
      },
      {
        taskId: 104,
        title: "Code Review for Login Module",
        date: "2024-01-04",
        category: "Review",
        description:
          "Review the code for the login module to ensure best practices.",
        state: "newTask",
      },
      {
        taskId: 105,
        title: "Optimize Login Performance",
        date: "2024-01-05",
        category: "Development",
        description:
          "Improve the performance of the login feature by optimizing code.",
        state: "active",
      },
    ],
  },
  {
    id: 2,
    firstName: "Alice",
    email: "2@abc.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        taskId: 201,
        title: "Test Checkout Process",
        date: "2024-01-01",
        category: "Testing",
        description:
          "Ensure the checkout process works seamlessly for all scenarios.",
        state: "completed",
      },
      {
        taskId: 202,
        title: "Fix Payment Gateway Issue",
        date: "2024-01-02",
        category: "Bug Fix",
        description:
          "Resolve the issue causing payment failures for specific cards.",
        state: "active",
      },
      {
        taskId: 203,
        title: "Document Checkout API",
        date: "2024-01-03",
        category: "Documentation",
        description:
          "Write detailed documentation for the checkout API endpoints.",
        state: "newTask",
      },
      {
        taskId: 204,
        title: "Handle Support Queries",
        date: "2024-01-04",
        category: "Support",
        description: "Respond to user queries related to the checkout process.",
        state: "completed",
      },
      {
        taskId: 205,
        title: "Enhance Payment Security",
        date: "2024-01-05",
        category: "Development",
        description:
          "Implement additional security measures for the payment gateway.",
        state: "active",
      },
    ],
  },
  {
    id: 3,
    firstName: "Bob",
    email: "3@abc.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        taskId: 301,
        title: "Develop User Profile Page",
        date: "2024-01-01",
        category: "Development",
        description: "Create the user profile page with editable fields.",
        state: "newTask",
      },
      {
        taskId: 302,
        title: "Test Profile Update Feature",
        date: "2024-01-02",
        category: "Testing",
        description: "Ensure users can update their profiles without issues.",
        state: "completed",
      },
      {
        taskId: 303,
        title: "Fix Profile Picture Upload Bug",
        date: "2024-01-03",
        category: "Bug Fix",
        description: "Resolve the issue with uploading profile pictures.",
        state: "failed",
      },
      {
        taskId: 304,
        title: "Review Profile Module Code",
        date: "2024-01-04",
        category: "Review",
        description: "Conduct a thorough review of the profile module code.",
        state: "active",
      },
      {
        taskId: 305,
        title: "Improve Profile Page Design",
        date: "2024-01-05",
        category: "Support",
        description:
          "Enhance the UI/UX of the profile page for better user experience.",
        state: "completed",
      },
    ],
  },
  {
    id: 4,
    firstName: "Eve",
    email: "4@abc.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        taskId: 401,
        title: "Test Notifications Feature",
        date: "2024-01-01",
        category: "Testing",
        description:
          "Verify that all notifications are sent and received correctly.",
        state: "completed",
      },
      {
        taskId: 402,
        title: "Fix Notification Delay Issue",
        date: "2024-01-02",
        category: "Bug Fix",
        description: "Resolve delays in sending notifications to users.",
        state: "failed",
      },
      {
        taskId: 403,
        title: "Document Notification System",
        date: "2024-01-03",
        category: "Documentation",
        description:
          "Write detailed documentation for the notification system.",
        state: "newTask",
      },
      {
        taskId: 404,
        title: "Develop Push Notification Feature",
        date: "2024-01-04",
        category: "Development",
        description: "Add push notification support for mobile users.",
        state: "active",
      },
      {
        taskId: 405,
        title: "Review Notification Logs",
        date: "2024-01-05",
        category: "Review",
        description: "Analyze notification logs to ensure proper delivery.",
        state: "active",
      },
    ],
  },
  {
    id: 5,
    firstName: "Charlie",
    email: "5@abc.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        taskId: 501,
        title: "Resolve Support Tickets",
        date: "2024-01-01",
        category: "Support",
        description: "Handle and resolve all pending support tickets.",
        state: "active",
      },
      {
        taskId: 502,
        title: "Test New Feature Deployment",
        date: "2024-01-02",
        category: "Testing",
        description:
          "Test the new features deployed in the production environment.",
        state: "newTask",
      },
      {
        taskId: 503,
        title: "Develop Dashboard Analytics",
        date: "2024-01-03",
        category: "Development",
        description: "Create analytics charts for the admin dashboard.",
        state: "completed",
      },
      {
        taskId: 504,
        title: "Fix Dashboard Bug",
        date: "2024-01-04",
        category: "Bug Fix",
        description: "Resolve the issue causing incorrect analytics data.",
        state: "failed",
      },
      {
        taskId: 505,
        title: "Document Dashboard Features",
        date: "2024-01-05",
        category: "Documentation",
        description: "Write documentation for the admin dashboard features.",
        state: "newTask",
      },
    ],
  },
  {
    id: 6,
    firstName: "Admin",
    email: "6@abc.com",
    password: "123",
    role: "admin",
  },
  {
    id: 7,
    firstName: "Shobhit",
    email: "7@abc.com",
    password: "123",
    role: "admin",
  },
];

const dataContext = createContext();

export const useDataContext = () => {
  return useContext(dataContext);
};

const DataProvider = ({ children }) => {
  // const [users, setUsers] = useState(allUser);
  const [users, setUsers] = useState(() => {
    const storedDetails = localStorage.getItem("allData");
    return storedDetails ? JSON.parse(storedDetails) : allUser;
  });
  useEffect(() => {
    console.log("users has changed");
    if (users) {
      localStorage.setItem("allData", JSON.stringify(users));
    } else {
      localStorage.removeItem("allData");
    }
  }, [users]);

  const changeState = (userID, taskID, newState) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userID) {
        return {
          ...user,
          tasks: user.tasks.map((task) =>
            task.taskId === taskID ? { ...task, state: newState } : task
          ),
        };
      } else return user;
    });
    setUsers(updatedUsers);
  };

  const addTask = (userID, task) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userID) {
        return {
          ...user,
          tasks: [...user.tasks, { ...task }], 
        };
      }
      return user; 
    });
    setUsers(updatedUsers);
  };
  return (
    <dataContext.Provider value={{ users, setUsers, changeState,addTask }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
