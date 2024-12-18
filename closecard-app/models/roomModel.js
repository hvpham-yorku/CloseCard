const mongoose = require(`mongoose`); 

const roomSchema = mongoose.Schema(
    {
            room_id : { 
                type: Number, 
                required: [true, "Please enter a room id"]
            },   
             creator_name : { 
                type: String, 
                required: [true, "Please enter a name"]
             },
             creator_email : { 
                type : String, 
                required: [true, "Please enter an email"]

             }
    },
    {
      timestamps : true
 
 }
  
  )
  const Room = mongoose.model('Room', roomSchema); 
  module.exports = Room; 
   