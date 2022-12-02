const chai = require('Chai')
const expect = chai.expect

const Round = require('../src/Round.js')
const Deck = require('../src/Deck.js')
const cardData = require('../src/data.js').prototypeData

describe('Round', function() {
    beforeEach(() => {
        deck = new Deck(cardData)
        round = new Round(deck)
        
    })
    it('Should be a function', function () {
        expect(Round).to.be.a('function')
    })
    it('Should be an instance of Round', function () {
        expect(round).to.be.an.instanceOf(Round)
    })
    it('Should have a turn count', function () {
        expect(round.turnCount).to.equal(0)
    })
    it('Should know the current card', function () {
        expect(round.currentCard).to.equal(deck.cards[0])
    })
    it('Should have a method to return the current card', function () {
        expect(round.returnCurrentCard()).to.equal(deck.cards[0])
    })
    it('Should have a takeTurn method that updates the turn count', function () {
        round.takeTurn()
        expect(round.turnCount).to.equal(1)
    })
    it('Should flip over a new card', function () {
        round.takeTurn()
        expect(round.currentCard).to.equal(deck.cards[1])
    })
    it('Should continue to update the turn count', function () {
        round.takeTurn()
        round.takeTurn()
        round.takeTurn()
        expect(round.turnCount).to.equal(3)
    })
    it('Should continue flipping over new cards', function () {
        round.takeTurn()
        round.takeTurn()
        round.takeTurn()
        expect(round.currentCard).to.deep.equal(deck.cards[3])
    })
    it('Should correctly handle a correct guess', function () {
        round.takeTurn('object')
        expect(round.incorrectGuesses).to.deep.equal([])
        expect(round.turnCount).to.equal(1)
    })
    it('Should add the id of the question to the incorrectGuesses array if the guess is incorrect', function () {
        round.takeTurn('object')
        round.takeTurn('pretty girls make graves')
        expect(round.incorrectGuesses).to.deep.equal([2])
        expect(round.turnCount).to.equal(2)
    })
    it('Should give feedback if the answer was correct', function () {
        expect(round.takeTurn('object')).to.equal('Correct!')
    })
    it('Should give feedback if the answer is incorrect', function () {
        expect(round.takeTurn('pretty girls make graves')).to.equal('Incorrect!')
    })
    it('Should be able to calculate the percentage of correct answers', function () {
        round.takeTurn('object')
        round.takeTurn('pretty girls make graves')
        round.takeTurn('mutator method')
        expect(round.calculatePercentCorrect()).to.equal(67)
    })

})