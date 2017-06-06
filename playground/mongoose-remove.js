const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '59364df58ae4e609e7675ac3';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('593687f3eb78c60b7166d81b').then((todo) => {
  console.log(todo);
});
