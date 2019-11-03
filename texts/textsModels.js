const db = require("../data/dbConfig");

function findTextById(id) {
  return db("texts")
    .where({ id })
    .first()
    .select("name", "text");
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

module.exports = {
  findTextById,
  getTexts,
  createText,
  deleteTextById
};
