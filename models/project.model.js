const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projectLead: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    developers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
