'use strict';

const Model = require('../model.js');
const schema = require('./events-schema.js');

// How can we connect ourselves to the mongo interface?
class Events extends Model {

  constructor(){
    super(schema);
  }

}

// What do we export?
module.exports = Events;