const express = require("express");
const router = express.Router();
const {
  getAllChats,
  getChatById,
  sendMessage,
} = require("../controllers/chatController");

// Existing routes
router.get("/", getAllChats);
router.get("/:id", getChatById);
router.post("/", sendMessage);

// ✅ New route for fetching messages in a chat
router.get("/:chatId/messages", (req, res) => {
  const { chatId } = req.params;
  
  // TODO: Replace this with DB query for messages of this chatId
  res.json([
    { text: "Hello from server" },
    { text: "This is chat " + chatId }
  ]);
});

module.exports = router;
