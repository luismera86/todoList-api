const User = require("../user.model");
const Task = require("../task.model");

const relationsDB = async () => {
  User.hasMany(Task, { foreignKey: "userId", sourceKey: "id", as: "tasks" });
  Task.belongsTo(User, { foreignKey: "userId", targetKey: "id", as: "user" });
  await User.sync({ alter: true });
  await Task.sync({ alter: true });
};

module.exports = relationsDB;
