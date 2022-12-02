const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card')
const Deck = require('./Deck')

class Game {
  constructor(prototypeQuestions) {
    this.currentRound = new Round(this.makeDeck())
    this.prototypeQuestions = prototypeQuestions
  }
  start() {
    this.makeCards()
    this.makeDeck()
    this.printMessage(this.makeDeck(), this.makeRound())
    this.printQuestion(this.makeRound())
    this.currentRound.calculatePercentCorrect()
    this.currentRound.endRound()
  }
  makeCards() {
    var cards = prototypeQuestions.map(question => {
      return {
        id: question.id, 
        question: question.question, 
        answers: question.answers, 
        correctAnswer: question.correctAnswer}
      })
      return cards
  }

  makeDeck() {
    var deck = new Deck(this.makeCards())
    return deck
  }

  makeRound() {
    let round = new Round(this.makeDeck())
    return round
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;