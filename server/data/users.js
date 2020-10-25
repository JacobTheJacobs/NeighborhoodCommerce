const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@example.com ",
    //(password,salt lenth)
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "demo",
    email: "demo@example.com ",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "demo2",
    email: "demo2@example.com ",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
