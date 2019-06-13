const RESULT = {
    P1WINS: 'p1Wins',
    P2WINS: 'p1Wins',
    DRAW: 'draw',
}

const THROW = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const THROWS = [THROW.ROCK, THROW.PAPER, THROW.SCISSORS]

class Requests {
    play(p1, p2, observer) {
        if (THROWS.includes(p1) === false ||
            THROWS.includes(p2) === false) {
            observer.invalid()
        } else if (p1 === p2) {
            observer.draw()
        } else if (p1 === THROW.ROCK && p2 === THROW.SCISSORS ||
            p1 === THROW.PAPER && p2 === THROW.ROCK ||
            p1 === THROW.SCISSORS && p2 === THROW.PAPER) {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }
    }
}

module.exports = {Requests, RESULT}