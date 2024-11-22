const express = require('express'); 
const mongoose = require(`mongoose`);
const app = express(); 
const port = 3000; 
mongoose.connect('mongodb+srv://webserver-user:8Ope4255lLUj1SpS@cluster0.xhn3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{ 
   console.log("Connected!")
   app.listen(port,() => { 
      console.log(`Server started listening on port ${port}`);
  })
}).catch((error) =>{
console.log(error)
});
app.post('/joinroom', (req,res) =>{ 
   // DATABASE STUFF 
    
}); 
app.post('/createroom', (req,res) =>{ 
    // DATABASE STUFF 
     
 }); 

 app.post('/sendmessage', (req,res) =>{ 
    // DATABASE STUFF 
     
 }); 
 app.post('/sendresponse', (req,res) =>{ 
    // DATABASE STUFF 
     
 }); 
 app.delete('/deleteroom', (req,res) => { 
    //DATABASE STUFF
 });

 app.put('/removeuser', (req,res)=>{ 
    //DATABASE STUFF

 });
 app.put('/removeuser', (req,res)=>{ 

 });

 app.get('/rooms', (req,res) =>{ 
    //DATABASE STUFF
 });

 app.get('/users', (req,res) =>{ 
    // DATABASE STUFF

 });
  

