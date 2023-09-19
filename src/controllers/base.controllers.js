const baseServices = require("../services/base.services");
const getAll = async (req, res) => {
  try {
    const result = await baseServices.getAll();
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await baseServices.getById(id);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const result = await baseServices.create(data);
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
    const result = await baseServices.update(id, data);
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server internal error" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await baseServices.remove(id);
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
