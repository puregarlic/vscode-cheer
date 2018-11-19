/* global suite, test */
// The module 'assert' provides assertion methods from node
const assert = require('assert')
const alex = require('alex')
const { getMessage, messages } = require('../messages')

// Defines a Mocha test suite to group tests of similar kind together
suite('Message text', function() {
  // Defines a Mocha unit test
  test('Test against Alex', function() {
    const text = messages.join(' ')
    const { messages: results } = alex(text)
    assert(results.length === 0, results.reduce((a, m) => a + m + '\n', '\n\n'))
  })
})

suite('getMessage', function() {
  test('Returns with an emoji', function() {
    const message = getMessage(true)
    assert(message.startsWith('🎉'))
  })

  test('Returns without an emoji', function() {
    const message = getMessage(false)
    assert(!message.startsWith('🎉'))
  })
})
