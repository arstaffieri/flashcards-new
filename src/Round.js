const Turn = require("./Turn")


class Round {
    constructor(deck) {
        this.turnCount = 0
        this.currentCard = deck.cards[0]
        this.incorrectGuesses = []
    }
    returnCurrentCard() {
        return this.currentCard
    }
    takeTurn(userGuess) {
        const newTurn = new Turn(userGuess, this.currentCard)
        if (!newTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.turnCount++
        this.currentCard = deck.cards[this.turnCount]
        return newTurn.giveFeedback()
    }
    calculatePercentCorrect() {
        const correct = this.turnCount - this.incorrectGuesses.length
        return Number(((correct/this.turnCount) * 100).toFixed(0))
    }
    endRound() {
        const percentCorrect = this.calculatePercentCorrect()
        console.log(`**Round over!** You answered ${percentCorrect}% of the questions correctly!`)
    }
}

module.exports = Round