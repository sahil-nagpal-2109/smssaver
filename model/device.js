const Sequelize = require("sequelize");
const db = require("../database/db");

const device = db.define(
  "device",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    upi:{
        type: Sequelize.STRING,
    }, 
    deviceId:{
        type: Sequelize.STRING,
        unique: true
    }
  },
  {
    timestamps: true,
    tableName: "device",
  }
);
module.exports = device;
