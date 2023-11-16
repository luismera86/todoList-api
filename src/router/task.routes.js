const express = require("express");
const { getAll, getById, create, remove, update } = require("../controllers/task.controllers");
const checkData = require("../middlewares/checkData")

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", checkData, create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
