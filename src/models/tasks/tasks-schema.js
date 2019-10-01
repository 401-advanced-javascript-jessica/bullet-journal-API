'use strict';

const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: 'incomplete',
    enum: ['incomplete', 'complete', 'migrated', 'future'],
    required: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
    required: true,
  },
});
module.exports = mongoose.model('tasks', tasksSchema);