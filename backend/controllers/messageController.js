import Conversation from "../models/converModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  // res.send("message send")
  // console.log("message send")

  try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const {senderId}=req.user._id;

    let conversation = await Conversation.findOne({
        participants:[senderId,receiverId]
    });

    if(!conversation){
        conversation = await Conversation.create({
            participants:{$all:[senderId,receiverId]}
        })
    };
    const newMessage= new Message({
        senderId,receiverId,message
    });

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }
   res.status(201).json(newMessage)
   console.log("megga")
  } 
  
  catch (error) {
    console.log("Error in message controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
