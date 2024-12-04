const mongoose = require(`mongoose`); 
const roomMsgSchema = mongoose.Schema(
   {
            username : {
               type : String,
               required: [true, "Please enter a username"]
            },
            sender_email : { 
               type : String, 
               required: [true, "Please enter an email"]

            }, 
            msg : { 
               type : String, 
               required: [true, "Please enter a msg"]
            }
   },{
   timestamps : true
 
}

)
const RoomMsg = mongoose.model('RoomMsg', roomMsgSchema); 
module.exports = RoomMsg; 