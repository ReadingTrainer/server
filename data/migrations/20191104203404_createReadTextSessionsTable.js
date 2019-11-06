exports.up = function(knex) {
  return knex.schema.createTable("text-session", session => {
    session.increments();
    session.timestamp("session_start");
    session.timestamp("session_end");
    session
      .integer("words_per_minute")
      .notNullable()
    session
      .integer("text_id")
      .notNullable()
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
  return knex.schema.dropTableIfExists("text-session");
};
