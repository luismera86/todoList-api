const taskServices = require("../services/task.services");
const getAll = async (req, res) => {
  try {
    const result = await taskServices.getAll();
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await taskServices.getById(id);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};

const create = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const result = await taskServices.create(data);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await taskServices.update(id, data);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await taskServices.remove(id);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
