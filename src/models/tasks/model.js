'use strict';

const Model = require('../model.js');
const schema = require('./tasks-schema.js');

// How can we connect ourselves to the mongo interface?
class Task extends Model {

  constructor(){
    super(schema);
  }

}

// What do we export?
module.exports = Task;