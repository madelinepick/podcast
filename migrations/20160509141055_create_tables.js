
exports.up = function(knex, Promise) {
  return knex.schema.createTable('podcasts', function(table){
  table.increments('id');
  table.string('title');
  table.string('description', 1000);
  table.date('date');
  table.string('link');
  table.string('image_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('podcasts')
};
