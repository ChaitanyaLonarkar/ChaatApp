import Conversation from "../models/converModel.js";
import Message from "../models/messageModel.js";
// import protectRoute from "../middleware/protectRoute.js";
export const sendMessage = async (req, res) => {
  // res.send("message send")
  // console.log("message send")

  // console.log(req.user._id);
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //  await conversation.save();
    //  await newMessage.save();
    // phle dono alag alag save ho rhe the , so below lines saves both parallaly in db
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
    console.log("megga");
  } catch (error) {
    console.log("Error in message controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(conversation.messages);
    console.log("conversation ho gya ");
  } catch (error) {
    console.log("Error in message controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// export default {sendMessage}
// export default getMessage
