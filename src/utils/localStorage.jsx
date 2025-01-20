const employees = [
  {
    id: "emp001",
    name: "John Doe",
    password: "password1",
    email: "emp001@example.com",
    taskCount: {
      active: 0,
      newTask: 2,
      completedTask: 0,
      failed: 0,
    },
  },
  {
    id: "emp002",
    name: "Jane Smith",
    password: "password2",
    email: "emp002@example.com",
    taskCount: {
      active: 0,
      newTask: 4,
      completedTask: 10,
      failed: 0,
    },
  },
  {
    id: "emp003",
    name: "Bob Johnson",
    password: "password3",
    email: "emp003@example.com",
    taskCount: {
      active: 0,
      newTask: 3,
      completedTask: 0,
      failed: 0,
    },
  },
  {
    id: "emp004",
    name: "Alice Brown",
    password: "password4",
    email: "emp004@example.com",
    taskCount: {
      active: 0,
      newTask: 1,
      completedTask: 0,
      failed: 0,
    },
  },
  {
    id: "emp005",
    name: "Charlie Davis",
    password: "password5",
    email: "emp005@example.com",
    taskCount: {
      active: 0,
      newTask: 2,
      completedTask: 0,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: "admin001",
    name: "Admin User",
    password: "admin@123",
    email: "admin@example.com",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employees = JSON.parse(localStorage.getItem("employees"));
  return { admin, employees };
};
