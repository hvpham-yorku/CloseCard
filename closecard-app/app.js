const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RoomUser = require('./models/roomUsersModel');
const Room = require('./models/roomModel');
const User = require('./models/userModel');
const RoomMsg = require('./models/roomMsgModel');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://webserver-user:8Ope4255lLUj1SpS@cluster0.xhn3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   .then(() => {
      console.log("Connected!");
      app.listen(port, () => {
         console.log(`Server started listening on port ${port}`);
      });
   }).catch((error) => {
      console.log(error);
   });

app.post('/joinroom', async (req, res) => {
   try {
      const roomuser = await RoomUser.create(req.body);
      res.status(200).json(roomuser);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
   }
});

app.post('/createroom', async (req, res) => {
   try {
      const room = await Room.create(req.body);
      res.status(200).json(room);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
   }
});

app.post('/sendmessage', (req, res) => {
   // Not implementing!
});

app.post('/sendresponse', async (req, res) => {
   try {
      const user = await RoomMsg.create(req.body);
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});


app.post('/removeuser', async (req, res) => {
   try {
      await User.findOneAndDelete({ email: req.body.email });
      res.status(200).json(req.body.email);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

app.post('/createuser', async (req, res) => {
   try {
      const user = await User.create({
         name: req.body.fullName,
         email: req.body.email,
      });
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

app.get('/rooms:id/users', async (req, res) => {
   try {
      const { id } = req.params;
      const users = await RoomUser.findById(id);
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

app.get('/users', async (req, res) => {
   try {
      const users = await User.find({});
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// New endpoint to store answers
app.post('/answers', async (req, res) => {
   try {
      const ans = {username: req.body.name, sender_email: req.body.email, msg: req.body.content};
      const answer = await RoomMsg.create(ans);
      res.status(200).json(answer);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// New endpoint to retrieve all answers
app.get('/answers', async (req, res) => {
   try {
      const answers = await RoomMsg.find({});
      res.status(200).json(answers);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});