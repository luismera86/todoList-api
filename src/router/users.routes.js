const express = require("express");
const { getAll, getById, create, remove, update } = require("../controllers/users.controllers");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
