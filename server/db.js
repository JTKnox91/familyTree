if (process.NODE_ENV && process.NODE_ENV !== "development") {
//production
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: 'knex,public'
});
} else {
//development
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "../db.sqlite"
  }
});
}

var bookshelf = require('bookshelf')(knex)

module.exports = bookshelf;    


