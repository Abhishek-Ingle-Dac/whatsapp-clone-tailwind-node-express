const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const processPayloads = require("./services/payloadProcessor");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/chats", chatRoutes);

// Optional: Run payload processor once on startup
// processPayloads().then(() => console.log("Payloads processed"));

// Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
