const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Users = sequelize.define('users',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey: true
  }, 
  uname:{
    type : Sequelize.STRING,
    allowNull: false
  },
  pnumber : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  email : {
    type : Sequelize.STRING,
    allowNull : false
  }
});

module.exports = Users;