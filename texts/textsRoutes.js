const express = require('express');
const textsController = require('./textsController');

const router = express.Router();

router.get('/', textsController.getAllTexts);

router.get(
  '/:id',
  textsController.getOneText
);

router.post(
  '/',
  textsController.createText,
);

module.exports = router;