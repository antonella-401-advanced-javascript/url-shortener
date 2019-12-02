const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  urlCode: String,
  shortUrl: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UrlShorten', schema);