const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const userRoute = require("./src/routes/user.route");
app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
