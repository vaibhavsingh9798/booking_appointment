const database = require('../util/database')
const Users = require('../models/user')
 
exports.getUsers = async (req,res,next) => {
    let data = await Users.findAll()
    res.json(data)
  }

  exports.postUser = (req,res,next) =>{
    let uname = req.body.userName;
    let pnumber = req.body.pNumber;
    let email = req.body.email;
    Users.create({
        uname:uname,
        pnumber:pnumber,
        email:email
    })
    .then((resp) => {
        //console.log('data inserted')
        res.json(resp)
      })
    .catch(err => console.log(err) )
}

exports.putUser = (req,res,next) =>{
   let uid = req.params.id
//console.log('put',req.body)
Users.update({
uname : req.body.userName,
pnumber: req.body.pNumber,
email :req.body.email
},
{where:{id:uid}} )
.then((resp) => {
   // console.log('successfull updated')
    res.json(resp)
})
.catch(err => console.log(err))
}

exports.deleteUser = (req,res,next) =>{
    let uid = req.params.id;
    Users.destroy({where:{id:uid}})
    .then((resp) => {
       // console.log('deleted')
        res.json(resp)
    })
    .catch(err => console.log(err))
}