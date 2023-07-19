const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const userModel = require('./Model/User');
 

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crudMern');


app.get('/',(req,res)=>{
userModel.find()
.then(users => res.json(users))
.catch(err => res.json(err));
})

app.post('/create',(req,res)=>{
  userModel.create(req.body)
  .then(response => res.json(response))
  .catch(err => res.json(err));
})
app.put('/update/:id',(req,res)=>{
  const id = req.body.id;
  userModel.findByIdAndUpdate({_id: id},{
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }).then(response => res.json(response))
  .catch(err => res.json(err))
})
app.post('/delete/:id',(req,res)=>{
  const id = req.body.id;
  console.log({_id:id})
  userModel.findByIdAndDelete({_id: id})
  .then(response => res.json(response))
  .catch(err => res.json(err))
})
app.listen(3001,()=>{
  console.log('server is running');
})