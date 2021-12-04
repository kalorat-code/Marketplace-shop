import bycrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bycrypt.hashSync("mmmmmm", 10),
    isAdmin: "true",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bycrypt.hashSync("mmmmmm", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bycrypt.hashSync("mmmmmm", 10),
  },
];

export default users;
