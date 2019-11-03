const textModel = require("./textsModels.js");

exports.getAllTexts = async (req, res) => {
  const { id } = req.params;
  try {
    const texts = await textModel.getTexts(id);
    return res.status(200).json(texts);
  } catch (error) {
    return res.status(500).json({
      Error: error
    });
  }
};

exports.getOneText = async (req, res) => {
  const { id } = req.params;  
  try {
    const texts = await textModel.findTextById(id);
    res.status(200).json({
      data: texts
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.createText = async (req, res) => {
  try {
    const text = await textModel.createText(req.body);
    return res.status(200).json({
      message: "text got created"
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message
    });
  }
};
