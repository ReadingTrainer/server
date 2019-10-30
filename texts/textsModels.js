const db = require('../data/dbConfig');

function findTextById(id) {
  return db('texts')
    .where({ id })
    .first()
    .select(
      'name',
      'text',
    );
}


function getTexts(userId) {
  return db('workouts').where(function() {
    this.where('user_id', userId).orWhere('user_id', null);
  });
}

async function createText(text) {
  const [text] = await db('workout-session').insert(
    text,
    '*',
  );
  return text;
}

module.exports = {
  findTextById,
  getTexts,
  createText,
};
