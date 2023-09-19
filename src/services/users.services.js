const User = require("../models/user.model");

const getAll = async () => {
  return await User.findAll();
};
const getById = async (id) => {
  const resp = await User.findByPk(id);
  if(!resp) return "Not found"
  return resp;
};

const create = async (data) => {
  const newData = User.create(data);
  return newData;
};

const update = async (id, data) => {
  const resp = await User.findByPk(id);
  if (!resp) return "Not found"
  
  const dataUpdate = await User.update(data, { where: { id } });
  return dataUpdate;
};

const remove = async (id) => {
  const resp = await User.findByPk(id);
  if(!resp) return "Not found"
  return await User.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
