const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  openTickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  ticketHistory: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
