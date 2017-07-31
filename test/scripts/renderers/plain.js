'use strict';

var should = require('chai').should(); // eslint-disable-line no-unused-vars

describe('plain', () => {
  var r = require('../../../lib/plugins/renderer/plain');

  it('normal', () => {
    r({text: '123'}).should.eql('123');
  });
});
