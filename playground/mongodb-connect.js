

const {MongoClient, ObjectID} = require('mongodb');
//console.log(ObjectID);
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todo_app', (err, db)=> {
 if(err){
   return console.log('Unable to connect to MongoDB server',err);
 }
 console.log('Connected to MongoDB server');
 // db.collection('todo').insertOne({
 //   text: 'Something to do',
 //   completed: false,
 // }, (err,result) => {
 //   if(err){
 //     return console.log('Unable to insert todo', err);
 //   }
 //   console.log(JSON.stringify(result.ops, undefined, 2));
 // });

// db.collection('users').insertOne({
//   name: 'Deepti Baghel',
//   age: 44,
//   location: 'Bhilai',
// } , (err, result) => {
//  if(err){
//    return console.log('Error saving user', err);
//  }
//  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//
// });
 db.close();
});
