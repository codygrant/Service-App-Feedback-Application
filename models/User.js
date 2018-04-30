const mongoose = require('mongoose');
const { Schema } = mongoose;          // destructuring

const userSchema = new Schema({
  googleId: String
});

// create the collection in the db
mongoose.model('users', userSchema);