const mongoose = require(`mongoose`); 
const roomMsgSchema = mongoose.Schema(
    {
            room_id : { 
                type: int, 
                required: [true, "Please enter a room id"]
            },   
             sender_name : { 
                type: String, 
                required: [true, "Please enter a name"]
             },
             sender_email : { 
                type : String, 
                required: [true, "Please enter an email"]

             }, 
             msg : { 
                type : String, 
                required: [true, "Please enter a msg"]
             },
             prompt_id : {
               type : int, 
               required : [true,"Please enter a prompt_id"]
             }
    }
    
    )
    const RoomMsg = mongoose.model('RoomMsg', roomMsgSchema); 