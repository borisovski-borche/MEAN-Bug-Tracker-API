const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref="User", required: true},
    ticket: {type: Schema.Types.ObjectId, ref="Ticket", required: true},
    content: {type: String, maxlength: 240, required: true}
});

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment