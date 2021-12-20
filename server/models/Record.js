const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  day: {
    type: String
  },
  value: {
    type: Number
  }
});

const Record = mongoose.model('Record', recordSchema);

module.exports = { Record }