const db = require('../data/dbConfig');

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const findById = id => {
  return db('users')
    .where({ id })
    .select(
      'id',
      'username',
      'email',
      'gender',
    )
    .first();
};

const createUser = async user => {
  return db('users').insert(user, [
    'id',
    'email',
    'username',
  ]);
};

const updateUser = async (id, user) => {
  return db('users')
    .where({ id })
    .update(user, [
      'id',
      'username',
      'email',
      'gender',
    ]);
};

module.exports = {
  findBy,
  createUser,
  findById,
  updateUser,
};
