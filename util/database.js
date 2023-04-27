// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('test','root','Vaibhav@123',{
//     dialect: 'mysql',
//     host: 'localhost'
// })


// module.exports = sequelize;

const Sequelize = require('sequelize')

const sequelize = new Sequelize('test','root','Vaibhav@123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize;