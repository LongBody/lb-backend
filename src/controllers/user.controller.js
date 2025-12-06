const users = require("../data/users.json");

exports.getUsers = (req, res) => {
  res.json({
    message: "List of users",
    data: users,
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.json({
    message: "User created successfully",
    data: newUser,
  });
};
