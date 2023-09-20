const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnection } = require("./config/dbConnection.config");
const taskRoutes = require("./router/task.routes");
const usersRoutes = require("./router/users.routes");
const relations = require("./models/relations/userTask");

relations();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/task", taskRoutes);
app.use("/api/users", usersRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

dbConnection();
