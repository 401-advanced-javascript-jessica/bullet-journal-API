'use strict';

const Model = require('../model.js');
const schema = require('./notes-schema.js');

// How can we connect ourselves to the mongo interface?
class Notes extends Model {

  constructor(){
    super(schema);
  }

}

// What do we export?
module.exports = Notes;