const Task = require("../models/task.model");

const getAll = async () => {
  return await Task.findAll();
};
const getById = async (id) => {
  const resp = await Task.findByPk(id);
  if (!resp) return "Not found";
  return resp;
};

const create = async (data) => {
  const newData = Task.create(data);
  return newData;
};

const update = async (id, data) => {
  const resp = await Task.findByPk(id);
  if (!resp) return "Not found";

  return await resp.update(data, { where: { id } });
};

const remove = async (id) => {
  const resp = await Task.findByPk(id);
  if (!resp) return "Not found";
  return await Task.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
