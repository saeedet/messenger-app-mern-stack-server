import message from "../models/message.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await message.find();

    console.log(messages);

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postMessage = async (req, res) => {
  const newMessage = new message(req.body);

  try {
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
