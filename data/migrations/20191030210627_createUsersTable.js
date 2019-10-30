exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
    users
      .string('email', 255)
      .notNullable()
      .unique();
    users.string('gender', 20);
    //   users.increments();
  //   users
  //     .string('username', 128)
  //     .notNullable()
  //     .unique();
  //   users.string('password', 128).notNullable();
  // })
  // .createTable('user_preference', user => {
  //   user.increments();
  //   user.text('photo', 50);
  //   user.text('first_name', 50);
  //   user.text('last_name', 50);
  //   user
  //     .integer("user_id")
  //     .unsigned()
  //     .unique()
  //     .notNullable()
  //     .references("id")
  //     .inTable("users")
  //     .onUpdate('CASCADE')
  //     .onDelete('CASCADE');
  // })
  //   .createTable('texts', table => {
  //     table.increments();
  //     table.text('text', 10000).notNullable();
  //     table.text('name').notNullable();
  //     table
  //     .integer("user_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("users");
  //   })
  //   .createTable('memory_game', table => {
  //     table.increments();
  //     table.text('front_picture', 100).notNullable();
  //     table.text('back_picture', 100).notNullable();
  //   })
  //   .createTable('find_words', table => {
  //     table.increments();
  //     table.text('word', 50).notNullable();
    })
};


exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
    // .dropTableIfExists('user_preference')
    // .dropTableIfExists('texts')
    // .dropTableIfExists('memory_game')
    // .dropTableIfExists('find_words');
};