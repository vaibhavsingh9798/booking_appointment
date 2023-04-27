const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize=require('./util/database')
const userRoutes = require('./routes/users')
const app = express()

app.use(cors())
//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/admin',userRoutes)

sequelize.sync()
.then(res =>{
    app.listen(3001);
})
.catch(err => console.log(err))

 
 