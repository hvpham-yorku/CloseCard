const mongoose = require(`mongoose`); 

const roomSchema = mongoose.Schema(
    {
            room_id : { 
                type: int, 
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
    }
    
    )
    const Room = mongoose.model('Room', roomSchema); 