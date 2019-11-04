const express = require("express");
const textsController = require("./textsControllers");

const router = express.Router();

router.get("/:id", textsController.getAllTexts);

router.get("/text/:id", textsController.getOneText);

router.post("/", textsController.createText);

router.delete("/text/:id", textsController.deleteText);

router.post("/:id([0-9]+)/start", textsController.startTextSession);

router.post("/:id([0-9]+)/end", textsController.endTextSession);

router.get("/history/:id", textsController.getTextHistory);

module.exports = router;
