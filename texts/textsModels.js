const db = require("../data/dbConfig");

function findTextById(id) {
  return db("texts")
    .where({ id })
    .first();
    // .select("name", "text");
}

function getTexts(userId) {
  return db("texts").where("user_id", userId);
}

function createText(text) {
  return db("texts").insert(text);
}

const deleteTextById = (id) => {
  return db('texts').where({ id }).del();
};

async function startTextSession(session) {
  const [textSession] = await db('text-session').insert(
    session,
    '*',
  );
  return textSession;
}

async function endTextSession(sessionId, sessionEnd) {
  const textSession = await db('text-session')
    .where('id', '=', sessionId)
    .update({
      session_end: sessionEnd,
    });
  return textSession;
}

function findTextSessionByUserId(userId) {
  return db('text-session')
    .where({ user_id: userId })
    .whereNotNull('session_start')
    .whereNull('session_end');
}

function getTextHistory(userId, dayLimit) {
  // // if dayLimit is provided, multiply the days by 86400000 milliseconds
  // // subtract the result from the current day's JS Date value
  // // parse the result to a Date value and convert toISOString()
  // // if dayLimit is not provided, use a predefined default limit.
  // const dateLimit =
  //   (dayLimit
  //     ? new Date(new Date() - dayLimit * 86400000).toISOString()
  //     : false) || new Date(1567213780604).toISOString();

  return db('text-session')
    .where({
      user_id: userId,
    })
    // .where('session_start', '>=', dateLimit);
}

module.exports = {
  findTextById,
  getTexts,
  createText,
  deleteTextById,
  startTextSession,
  endTextSession,
  findTextSessionByUserId,
  getTextHistory
};
