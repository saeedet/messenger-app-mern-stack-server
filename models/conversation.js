import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
  title: String,
  messages: [{ messageId: String }],
});

const conversation = mongoose.model("conversation", conversationSchema);

export default conversation;
