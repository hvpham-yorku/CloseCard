const express = require('express'); 
const mongoose = require(`mongoose`);
const cors = require('cors');
const app = express(); 
const port = 3000; 
const RoomUser = require('./models/roomUsersModel'); 
const Room = require('./models/roomModel'); 
const User  = require('./models/userModel'); 
const RoomMsg = require('./models/roomMsgModel'); 


app.use(express.json()); 
app.use(cors());
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
    // Not implementing!
     
 }); 
 app.post('/sendresponse:', async(req,res) =>{ 
    // DATABASE STUFF 
    try { 
      // REQUEST BODY MUST HAVE ROOM_ID, USER_NAME, USER_EMAIL, PROMPT_ID
      const user = await RoomMsg.create(req.body);
      res.status.json(user);
   }
   catch(error){ 
      res.status(500).json({message : error.message});
   }
   
 }); 
 app.delete('/deleteroom', (req,res) => { 
    //DATABASE STUFF
    //Not Implementing 
 });

 app.delete('/removeuser', (req,res)=>{ 
    //DATABASE STUFF
   // IGNORE FOR NOW
 });

 app.post('/createuser', async(req,res) => { 
   // REQUEST BODY MUST HAVE USER_NAME, USER_EMAIL
   try { 
      const user = await User.create({
         name: req.body.fullName,
         email: req.body.email,
      });
      res.status(200).json(user);
   }
   catch(error){ 
      res.status(500).json({message : error.message});
   }

 });

 app.get('/rooms:id/users', async(req,res) =>{ 
    //DATABASE STUFF
    try {
      const {id} = req.params.id; 
      const users = await RoomUser.findById(id);
      res.status(200).json(users); 
      
    } catch (error) {
      res.status(500).json({message : error.message})
    }
 });

 app.get('/users', async(req,res) =>{ 
    // DATABASE STUFF
    try {
      const users = await User.find({});
      res.status(200).json(users); 
      
    } catch (error) {
      res.status(500).json({message : error.message})
    }
 });
  

