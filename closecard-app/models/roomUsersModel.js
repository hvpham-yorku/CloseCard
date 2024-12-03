const mongoose = require(`mongoose`); 
const roomUserSchema = mongoose.Schema(
    {
            room_id : { 
                type: Number, 
                required: [true, "Please enter a room id"]
            },   
             user_name : { 
                type: String, 
                required: [true, "Please enter a name"]
             },
             user_email : { 
                type : String, 
                required: [true, "Please enter an email"]

             }
    },
    {
      timestamps : true
 
 }
  
  )
  const RoomUser = mongoose.model('RoomUser', roomUserSchema); 
  module.exports = RoomUser; 
    
