exports.up = function(knex) {
  return knex.schema.createTable("textSession", session => {
    session.increments();
    session.timestamp("session_start");
    session.timestamp("session_end");
    session
      .integer("text_id")
      .unsigned()
      .references("id")
      .inTable("texts")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    session
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
    session.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("textSession");
};
