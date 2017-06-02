

const {MongoClient, ObjectID} = require('mongodb');
//console.log(ObjectID);
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todo_app', (err, db)=> {
 if(err){
   return console.log('Unable to connect to MongoDB server',err);
 }
 console.log('Connected to MongoDB server');
 //delete many
 // db.collection('todo').deleteMany({text: 'Eat'}).then((result) => {
 //   console.log(result);
 // });

 //delete one
 // db.collection('todo').deleteOne({text: 'Eat'}).then((result) => {
 //   console.log(result);
 // });

 //find one and delete
 db.collection('todo').findOneAndDelete({text: 'Eat'}).then((result) => {
   console.log(result);
 });

 db.close();
});
