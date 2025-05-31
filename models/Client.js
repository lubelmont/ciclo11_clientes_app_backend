
const {DataTypes: Sequelize} = require('sequelize');
const sequelize = require('../index.js'); 

const Cliente = sequelize.define('Cliente', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  module.exports = Cliente;
  