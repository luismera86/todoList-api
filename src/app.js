const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { dbConnection } = require("./config/dbConnection.config");
const taskRoutes = require("./router/task.routes");
const usersRoutes = require("./router/users.routes");
const relationsDB = require("./models/relations/relationsDB");
const generateToken = require("./utils/jwt");

relationsDB();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/task", taskRoutes);
app.use("/api/users", usersRoutes);
app.get("/", (req, res) => {
  const token = generateToken({user: "Luis"})
  console.log(token)
  res.cookie("token", token, { maxAge: 900000, httpOnly: true })
  
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

dbConnection();
