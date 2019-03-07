const Game = require('./scorecard');

describe('It calculates score from 20 rolls', () => {
  test('it returns 0 for a gutter game', () => {
    var game = new Game()
    var roll = 0
    do {
      game.roll(0)
      roll += 1
    } while (roll <= 20)
  })
  expect(Game.score()).toBe(0)
})
