import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  displayName: String,
  email: String,
  photoURL: String,
  uid: String,
});

const user = mongoose.model("user", userSchema);

export default user;
