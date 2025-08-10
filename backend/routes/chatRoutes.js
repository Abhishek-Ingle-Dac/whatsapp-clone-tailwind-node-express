// backend/routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllChats,
  createChat,
  getChatById,
  updateChat,
  deleteChat
} = require('../controllers/chatController');

// @route   GET /api/chats
// @desc    Get all chats
router.get('/', getAllChats);

// @route   POST /api/chats
// @desc    Create a new chat
router.post('/', createChat);

// @route   GET /api/chats/:id
// @desc    Get a single chat by ID
router.get('/:id', getChatById);

// @route   PUT /api/chats/:id
// @desc    Update a chat
router.put('/:id', updateChat);

// @route   DELETE /api/chats/:id
// @desc    Delete a chat
router.delete('/:id', deleteChat);

module.exports = router;
