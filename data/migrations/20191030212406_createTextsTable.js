exports.up = function(knex) {
  return knex.schema.createTable("texts", texts => {
    texts.increments();
    texts.text("text", 500000).notNullable();
    texts.text("name").notNullable();
    texts;
    texts
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("texts");
};
