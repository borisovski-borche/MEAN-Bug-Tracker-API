const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = -require("validator");
const bcrypt = require("bcryptjs");

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
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    required: true,
  },
  openTickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  ticketHistory: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid Credentials");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credentials");
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
