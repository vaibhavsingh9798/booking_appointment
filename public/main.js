
let myForm = document.getElementById('myform');
myForm .addEventListener('submit',onSubmit)
let ul = document.getElementById('expenses')
ul.addEventListener('click',onUpdate)    
let edit = false;
let id;
let occurence=0;
function onSubmit(e){
    e.preventDefault();
    let amount = document.getElementById('amount').value
    let description = document.getElementById('description').value
    let category = document.getElementById('category').value
    let expDetails = {amount,description,category}
    console.log(expDetails)
     document.getElementById('amount').value=""
     document.getElementById('description').value=""
     document.getElementById('category').value=""
     if(expDetails.amount.length && expDetails.description.length && expDetails.category.length){
     if(!edit)
     postUsers(expDetails)
     else
     putUser(expDetails)
     }
}

const print = (item) =>{
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(`${item.amount} - ${item.description} - ${item.category}`))
  let editBtn = document.createElement('button')
  let delBtn = document.createElement('button')
  editBtn.appendChild(document.createTextNode('Edit'))
  delBtn.appendChild(document.createTextNode('Delete'))
  delBtn.setAttribute('id',`${item.id}`)
  delBtn.setAttribute('class','delbtn float-right m-1')
  editBtn.setAttribute('id',`${item.id}`)
  editBtn.setAttribute('class','edit float-right m-1')
   li.appendChild(editBtn)
   li.appendChild(delBtn)
  ul.appendChild(li)
}

const getUsers = (occurence) =>{

     let parentElement = document.querySelector('#expenses')
     parentElement.innerHTML=''
     axios.get('http://localhost:3001/admin/expenses')
     .then(response => {
         // console.log('response',response)
         // console.log('response.data',response.data)
          response.data.map((item) => print(item))
     } )
     .catch(err =>  console.log('err',err) )
       
}

 document.addEventListener('DOMContentLoaded',getUsers)

const postUsers = async (expense) =>{
 console.log('post',expense)
 axios.post('http://localhost:3001/admin/expense',expense)
 .then(() => {
    // console.log('data sended from frontendend')
     getUsers()
})
.catch(err => console.log('err',err))
}

const putUser = async (expense) =>{
     let response = await axios.put(`http://localhost:3001/admin/expense/${id}`,expense)
     edit = false;
     getUsers()
}

const deleteUser = async (id) =>{
   //  console.log('del id',id)
     let response = await axios.delete(`http://localhost:3001/admin/expense/${id}`)
     //console.log('deleted')
     getUsers()
}

function onUpdate(e){
     console.log(e.target)
     
     if(e.target.getAttribute('class') == 'delbtn float-right m-1'){
          let id = e.target.getAttribute('id') 
          deleteUser(id)
     }
     else if(e.target.getAttribute('class') == 'edit float-right m-1'){
          edit = true;
          let data;
           id = e.target.getAttribute('id')
          let li = document.querySelectorAll('li')
          li.forEach((item) => {
               let btn = item.querySelector('button')
               if(btn){
               let btnId = btn.getAttribute('id')
               if(btnId == id)
                data = item.textContent.slice(0,-10).split(" - ")
                //console.log(data)
               }
          })
          document.getElementById('amount').value=data[0]
          document.getElementById('description').value=data[1]
          document.getElementById('category').value=data[2]
     }

    // console.log('onUpdate')
}





