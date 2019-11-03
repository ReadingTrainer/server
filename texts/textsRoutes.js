const express = require('express');
const textsController = require('./textsControllers');

const router = express.Router();

router.get('/:id', textsController.getAllTexts);

router.get(
  '/text/:id',
  textsController.getOneText
);

router.post(
  '/',
  textsController.createText,
);

router.delete(
  '/text/:id',
  textsController.deleteText,
);

module.exports = router;