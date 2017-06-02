

const {MongoClient, ObjectID} = require('mongodb');
//console.log(ObjectID);
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todo_app', (err, db)=> {
 if(err){
   return console.log('Unable to connect to MongoDB server',err);
 }
 console.log('Connected to MongoDB server');

 db.collection('users').findOneAndUpdate(
   {_id: new ObjectID('593130bb17de7b05df340c23')},
   { $set: {name: 'Poonam'
     },
     $inc: {age: 2
     }
   },
   {
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   });


 db.close();
});
