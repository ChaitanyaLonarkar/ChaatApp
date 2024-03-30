import Conversation from "../models/converModel.js";
import Message from "../models/messageModel.js";
// import protectRoute from "../middleware/protectRoute.js";
const sendMessage = async (req, res) => {
  // res.send("message send")
  // console.log("message send")

  // console.log(req.user._id);
  try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;


    let conversation = await Conversation.findOne({
      participants:{$all:[senderId,receiverId]}
    });
    
    if(!conversation){
      conversation = await Conversation.create({
          participants:[senderId,receiverId]
        });
    };
    const newMessage= new Message({
        senderId:senderId,
        receiverId:receiverId,
        message:message,
    });

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }
   await conversation.save();
   await newMessage.save();

   res.status(201).json(newMessage)
   console.log("megga")
  } 
  
  catch (error) {
    console.log("Error in message controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default sendMessage