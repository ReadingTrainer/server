const textModel = require('./textsModels.js');

exports.getAllTexts = async (req, res) => {
  const user_id = req.userId;
  try {
    const texts = await textModel.getTexts(user_id);
    return res.status(200).json(texts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
};

exports.getOneText = async (req, res) => {
  try {
    const texts = await textModel.findTextById(req.params.id);
    res.status(200).json({
      data: texts,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};


exports.createText = async (req, res) => {
  try {
    const text = await textModel.createText(
      req.body,
    );
    return res.status(200).json({
      data: {
        name: text.name,
        text: text.text,
      },
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};