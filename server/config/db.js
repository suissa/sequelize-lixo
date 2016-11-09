const Sequelize = require('sequelize');

const connection = new Sequelize('centreso', 'root', 'senha123', {
  host:'localhost',
  dialect:'mysql'
});
/*
 module.exports = new Sequelize('centreso', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
 pool: {
 max: 5,
 min: 0,
 idle: 10000
 }
 });
 */


// Or you can simply use a connection uri
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');