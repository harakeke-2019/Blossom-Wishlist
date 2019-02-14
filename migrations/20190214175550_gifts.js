
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gifts', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('item')
    table.string('url')
    table.boolean('purchased')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gifts')
};
