const chai = require('Chai')
const expect = chai.expect

const cardData = require('../src/data.js').prototypeData

const Card = require("../src/Card");
const Round = require('../src/Round');
const Game = require("../src/Game");

describe('Game', function () {
  let newGame
  this.beforeEach(() => {
    newGame = new Game()
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function() {
    expect(newGame).to.be.an.instanceOf(Game)
  })

  it('should start a new game', function() {
    newGame.start()
    expect(newGame.currentRound).to.be.an.instanceOf(Round)
    expect(newGame.currentRound.deck[0]).to.be.an.instanceOf(Card)
  })
})