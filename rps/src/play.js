const RESULT = {
    P1WINS: 'p1Wins'
}

const THROW = {
    PAPER: 'paper'
}

class Requests {
    play(p1, p2, observer) {
        if (p1 === THROW.PAPER) {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }
    }
}

module.exports = {Requests, RESULT}