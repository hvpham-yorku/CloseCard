const express = require('express'); 
const mongoose = require(`mongoose`);
const app = express(); 
const port = 3000; 
const RoomUser = require('./models/roomUserModel'); 
const Room = require('./models /roomModel'); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: false})); 
mongoose.connect('mongodb+srv://webserver-user:8Ope4255lLUj1SpS@cluster0.xhn3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{ 
   console.log("Connected!")
   app.listen(port,() => { 
      console.log(`Server started listening on port ${port}`);
  })
}).catch((error) =>{
console.log(error)
});

app.post('/joinroom', async(req,res) =>{ 
   // DATABASE STUFF 
   try{ 
    // REQUEST BODY MUST HAVE ROOM ID, USER_NAME, USER_EMAIL
    const roomuser  = await RoomUser.create(req.body)
    res.status(200).json(RoomUser);

   } catch (error){ 
    console.log(error); 
    res.status(500).json({message: error.message}); 
   }
    
}); 
app.post('/createroom', async(req,res) =>{ 
    // DATABASE STUFF 
    try{ 
        // REQUEST BODY MUST HAVE ROOM ID, USER_NAME, USER_EMAIL
        const room  = await Room.create(req.body)
        res.status(200).json(Room);
    
       } catch (error){ 
        console.log(error); 
        res.status(500).json({message: error.message}); 
       }
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
  

