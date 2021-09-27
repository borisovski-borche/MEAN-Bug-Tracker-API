const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    asignee: { type: Schema.Types.ObjectId, ref: "User", required: true },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
