

const {MongoClient, ObjectID} = require('mongodb');
//console.log(ObjectID);
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todo_app', (err, db)=> {
 if(err){
   return console.log('Unable to connect to MongoDB server',err);
 }
 console.log('Connected to MongoDB server');
 // db.collection('todo').find({
 //   _id: new ObjectID('5931166293959e05211c2190')
 //   }).toArray().then((docs) => {
 //   console.log('ToDos');
 //   console.log(JSON.stringify(docs, undefined, 2));
 // }, (err) => {
 //   console.log('Unable to fetch todos', err);
 // });

 // db.collection('todo').find().count().then((count) => {
 //   console.log(`ToDos count: ${count}`);
 //
 // }, (err) => {
 //   console.log('Unable to fetch todos', err);
 // });

 db.collection('users').find({name: 'Deepti'}).toArray().then((docs)=> {
   console.log(JSON.stringify(docs, undefined, 2));
 }, (err) => {
   console.log('Unable to find user', err);
 });

 db.close();
});
