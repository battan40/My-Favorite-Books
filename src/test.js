const chai = require('chai');
const expect = chai.expect;
const { userGreeting } = require('../src/index');

describe ('userGreeting', () => {
  it('Should be a function', () => {
    expect(userGreeting).to.be.a('function')
  });

});
