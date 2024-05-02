const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  isPublic: {
    type: Boolean,
    default: true
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
