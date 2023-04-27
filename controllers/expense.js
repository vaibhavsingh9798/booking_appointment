const database = require('../util/database')
const Expenses = require('../models/expense')
 
exports.getExpense = async (req,res,next) => {
    let data = await Expenses.findAll()
    res.json(data)
  }

  exports.postExpense = (req,res,next) =>{
    let amount = req.body.amount;
    let description = req.body.description;
    let category = req.body.category;
    Expenses.create({
        amount:amount,
        description:description,
        category:category
    })
    .then((resp) => {
        console.log('data inserted')
        res.json(resp)
      })
    .catch(err => console.log(err) )
}

exports.putExpense = (req,res,next) =>{
   let uid = req.params.id
//console.log('put',req.body)
Expenses.update({
    amount : req.body.amount,
    description: req.body.description,
    category:req.body.category
},
{where:{id:uid}} )
.then((resp) => {
    console.log('successfull updated')
    res.json(resp)
})
.catch(err => console.log(err))
}

exports.deleteExpense = (req,res,next) =>{
    let uid = req.params.id;
    Expenses.destroy({where:{id:uid}})
    .then((resp) => {
        console.log('deleted')
        res.json(resp)
    })
    .catch(err => console.log(err))
}