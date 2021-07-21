const express = require('express');

const controller = require("../controllers/controller");


const router = express.Router();
router.post("/", controller.create);
router.get("/", controller.readAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;

