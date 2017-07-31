'use strict';

var should = require('chai').should(); // eslint-disable-line no-unused-vars

describe('yaml', () => {
  var r = require('../../../lib/plugins/renderer/yaml');

  it('normal', () => {
    r({text: 'foo: 1'}).should.eql({foo: 1});
  });

  it('escape', () => {
    var body = [
      'foo: 1',
      'bar:',
      '\tbaz: 3'
    ].join('\n');

    r({text: body}).should.eql({
      foo: 1,
      bar: {
        baz: 3
      }
    });
  });
});
