const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
// const cardData = require('../src/data.js')

describe('Deck', function() {
   
    it('Should be a function', function() {
        const newDeck = new Deck()
        expect(Deck).to.be.a('function')
    })

    it('Should be an instance of Deck', function() {
        const newDeck = new Deck()
        expect(newDeck).to.be.an.instanceOf(Deck)
    })
    
    it('Should have a cards array', function() {
        const newDeck = new Deck()
        expect(newDeck.cards).to.be.an('array')
    })

    it('Should know how many cards are in the deck', function() {
        const card1 = new Card(
            1,
            "What allows you to define a set of related information using key-value pairs?",
            ["object", "array", "function"],
            "object")
        
        const card2 = new Card(
            2,
            "What is a comma-separated list of related values?",
            ["array", "object", "function"],
            "array")
        
        const card3 = new Card(
            3,
            "What type of prototype method directly modifies the existing array?",
            ["mutator method", "accessor method", "iteration method"],
            "mutator method")
        
        const card4 = new Card(
            4,
            "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
            ["mutator method", "accessor method", "iteration method"],
            "accessor method"
        )
        const testCards = [card1, card2, card3, card4]
        const newDeck = new Deck(testCards)
    
        expect(newDeck.countCards()).to.deep.equal(4)
    })
})