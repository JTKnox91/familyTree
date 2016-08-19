//Dev implementation
var knex = require('knex')({
  client: 'sqlite3',
  connection: {filename: "./db.sqlite"},
  useNullAsDefault: true,
});
var bookshelf = require('bookshelf')(knex);

bookshelf.knex.schema.createTableIfNotExists('persons', function (table) {
  table.increments();
  table.string('nameFirst');
  table.string('nameLast');
  table.string('nameMiddle');
  table.date('birthday');
  table.string('photoURL')
  table.timestamps();
});

bookshelf.knex.schema.createTableIfNotExists('generation', function (table) {
  table.increments();
  table.integer('order');
  table.timestamp();
});

var Person = bookshelf.Model.extend({
  tableName: 'persons',
  spouse: function () {return this.hasOne(Person);},
  parent: function () {return this.belongsTo(Person);},
  children: function () {return this.hasMany(Person);}
});
var Persons = bookshelf.Collection.extend({
  model: Person,
});
var Generation = bookshelf.Model.extend({
  tableName: 'generations',
  persons: function () {return this.hasMany(Person);}
});
var Generations = bookshelf.Collection.extend({
  model: Generation,
});


module.exports = {
  Person: Person,
  Persons: Persons,
  Generation: Generation,
  Generations: Generations,
};