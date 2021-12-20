
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
let db = { database: process.env.database, user: process.env.user, password: process.env.password, host: process.env.host, port: process.env.dbport };

module.exports = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'mysql',
  pool: {
    maxConnections: 10,
    minConnections: 0,
    maxIdleTime: 1000,
    acquire: 60000,
    idle: 10000,
  },
  define: {
    paranoid: false,
  }
});