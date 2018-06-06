const mongoose = require("mongoose");
const { Schema } = mongoose; // destructuring

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// create the collection in the db
mongoose.model("users", userSchema);
