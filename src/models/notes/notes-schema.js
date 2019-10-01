'use strict';

const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tag: {
    type: String,
    required: false,
  },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
    },
});

module.exports = mongoose.model('notes', notesSchema);