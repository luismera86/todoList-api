const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection.config");
const Task = require("./task.model");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
});

User.findAllData = function () {
  // User.hasMany(Task, { foreignKey: "userId" });
  return User.findAll({ include: Task });
};

module.exports = User;
