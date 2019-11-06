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
    const text = await textModel.findTextById(id);
    res.status(200).json({
      text
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

exports.deleteText = async (req, res) => {
  const { id } = req.params;
  const deleteText = await textModel.deleteTextById(id);

  try {
    if (deleteText) {
      res.status(200).json(deleteText);
    } else {
      res.status(400).json({ message: "invalid Id " });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: `request could'nt process` });
  }
};

exports.startTextSession = async (req, res) => {
  try {
    const { userId, wordsPerMinute } = req.body;
    const { id } = req.params;
    const session = {
      session_start: new Date().toISOString(),
      text_id: id,
      user_id: userId,
      words_per_minute: wordsPerMinute
    };
    const startSession = await textModel.startTextSession(
      session,
    );
    return res.status(200).json({
      message: 'text session started',
      sessionId: startSession,
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};

exports.endTextSession = async (req, res) => {
  try {
    const sessionEnd = new Date().toISOString();
    const { session_id } = req.body;
    const endSession = await textModel.endTextSession(
      session_id,
      sessionEnd,
    );
    return endSession
      ? res.status(200).json({
          message: 'Text session ended',
        })
      : res.status(500).json({
          error: 'Something went wrong, Please Try Again',
        });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};

exports.getTextHistory = async (req, res) => {
  try {
    let { days } = req.query;
    // if days provided is not valid, discard it.
    days = !Number.isNaN(Number(days)) ? days : undefined;
    const { id } = req.params;
    const textHistory = await textModel.getTextHistory(
      id,
      days,
    );
    return res.status(200).json({
      message: 'Text History Retrieved Succesfully',
      textHistory,
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};
