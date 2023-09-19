// Configuración de sequelize para la conexión a la base de datos con postgresql

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todolist", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false, // Desactiva los logs SQL en la consola
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  sequelize,
  dbConnection,
};
