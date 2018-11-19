const getRandomFromArray = require('get-random-from-array')

// Messages pool
const messages = [
  'Great work!',
  'Keep it up!',
  "I love what you're doing.",
  'Nice!',
  'I love it!',
  'I see what you did there...',
  'Heck yeah!',
  'You look great!',
  'Clever — I like it!',
  'This project is really coming together.',
  "I'm so proud of you!",
  'This is really great work.',
  "I'm a huge fan of what you're doing!"
]

// Create a random message closure
const getRandomMessage = getRandomFromArray(messages)

// Return a random message w/ or w/o an emoji
const getMessage = emoji => {
  return `${emoji ? '🎉 ' : ''}${getRandomMessage()}`
}

module.exports = {
  messages,
  getMessage
}
