const mongoose = require(`mongoose`); 
const roomUserSchema = mongoose.Schema(
    {
            room_id : { 
                type: int, 
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
    }
    
    )
    const RoomUser = mongoose.model('RoomUser', roomUserSchema); 