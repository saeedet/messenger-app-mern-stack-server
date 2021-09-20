import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  conversationId: String,
  message: String,
  timestamp: {
    type: Date,
    default: new Date(),
  },
  userId: String,
});

const message = mongoose.model("message", messageSchema);

export default message;
