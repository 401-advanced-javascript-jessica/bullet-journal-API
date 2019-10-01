'use strict';

const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users',
  },

});
module.exports = mongoose.model('events', eventsSchema);