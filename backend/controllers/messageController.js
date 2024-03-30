export const sendMessage = async (req, res) => {
  // res.send("message send")
  // console.log("message send")

  try {
    const {message}=req.body;
    const {id}=req.params;
    const {senderId}=req.userId
  } catch (error) {
    console.log("Error in message controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
