const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '59364df58ae4e609e7675ac3';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log(todo);
// }).catch((e) => {
//   console.log(e);
// });

//User find by id

var uid = '593671be9195588143914346';
if(!ObjectID.isValid(uid)){
  console.log('ID not valid');
}

User.findOne({
  email: 'deeptibaghel@gmail.com'
}).then((user) => {
  console.log(user);
});

// User.findById(uid).then((user) => {
//   if(!user){
//     return console.log('User not found');
//   }
//   console.log(user);
// }).catch((e) => {
//   console.log(e);
// });
