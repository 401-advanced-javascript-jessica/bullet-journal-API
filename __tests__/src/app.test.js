'use strict';

const server = require('../../src/app').server;
const supergoose = require('./supergoose.js');
const mockRequest = supergoose.server(server);



beforeAll(async (done) => {
  await supergoose.startDB();
  done();
});

afterAll( () => {
  supergoose.stopDB();
});

describe('Home Route',  () => {

  it('should successfully hit the home route', () => {
    return mockRequest.get('/')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });

});