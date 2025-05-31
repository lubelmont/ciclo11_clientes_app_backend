
const {DataTypes: Sequelize} = require('sequelize');
const sequelize = require('../config/database.js'); 

const Cliente = sequelize.define('Cliente', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  module.exports = Cliente;

  