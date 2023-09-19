const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection.config");
const User = require("./user.model");

const Task = sequelize.define("Task", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

Task.findOneData = function (id) {
  // Task.belongsTo(User, { foreignKey: "userId" });
  return Task.findOne({ where: { id }, include: "user" });
};

module.exports = Task;
