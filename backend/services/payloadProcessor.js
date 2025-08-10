const fs = require("fs");
const path = require("path");
const Message = require("../models/Message");

const processPayloads = async () => {
  const payloadDir = path.join(__dirname, "../payloads");
  const files = fs.readdirSync(payloadDir);

  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(payloadDir, file), "utf8"));

    // If it's a message payload
    if (data.messages) {
      for (const msg of data.messages) {
        await Message.create({
          wa_id: data.contacts[0].wa_id,
          name: data.contacts[0].profile.name,
          message: msg.text.body,
          timestamp: new Date(msg.timestamp * 1000),
          status: "sent",
          meta_msg_id: msg.id
        });
      }
    }

    // If it's a status update payload
    if (data.statuses) {
      for (const status of data.statuses) {
        await Message.findOneAndUpdate(
          { meta_msg_id: status.id },
          { status: status.status }
        );
      }
    }
  }
};

module.exports = processPayloads;
