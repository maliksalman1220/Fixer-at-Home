const mongoose = require("mongoose");
const conn = require("../config/db");

const Message = new mongoose.Schema(
    {
        sender: {type: mongoose.ObjectId, requried: true},
        receiver: {type: mongoose.ObjectId, requried: true},
        sender_name: {type: String, requried: true},
        receiver_name: {type: String, requried: true},
        content: {type: String, requried: true},
        timestamp: { type: Date, required: true},
    },
    { collection: 'Messages' }
)

module.exports = model = conn.model('MessageData', Message);