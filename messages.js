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
  'This is really coming together.',
  "I'm so proud of you!",
  'This is really great work.',
  "I'm a huge fan of what you're doing!",
  "Woah, that's awesome!",
  'This is fantastic!',
  "Oh, that's super cool.",
  'Slick!',
  'This is amazing!',
  "You're truly amazing.",
  'Game changing.',
  "You're a genius!",
  'That was brilliant!',
  'That was superb.',
  "You're going to change the world."
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
