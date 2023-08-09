// test/my-test.js

const assert = require('chai').assert;

describe('Sample Test Suite', function () {
  it('should pass', function () {
    assert.equal(2 + 2, 4);
  });

  it('should concatenate strings', function () {
    assert.strictEqual('Hello, ' + 'World!', 'Hello, World!');
  });
});
