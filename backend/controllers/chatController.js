const Message = require("../models/Message");

// Get all chats grouped by wa_id
const getAllChats = async (req, res) => {
  try {
    const chats = await Message.aggregate([
      {
        $group: {
          id: "$wa_id",
          name: { $first: "$name" },
          lastMessage: { $last: "$message" },
          lastTimestamp: { $last: "$timestamp" }
        }
      },
      { $sort: { lastTimestamp: -1 } }
    ]);
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get messages for a specific wa_id
const getChatById = async (req, res) => {
  try {
    const messages = await Message.find({ wa_id: req.params.id }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Send (store) a message
const sendMessage = async (req, res) => {
  try {
    const { wa_id, name, message } = req.body;
    const newMessage = await Message.create({
      wa_id,
      name,
      message,
      timestamp: new Date(),
      status: "sent"
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllChats, getChatById, sendMessage };
