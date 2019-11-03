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



module.exports = router;