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

const VALID_THROWS = [THROW.ROCK, THROW.PAPER, THROW.SCISSORS]

function PlayRequest(p1, p2, observer, repo) {
    this.process = () => {
        if (eitherInvalid()) {
            observer.invalid()
            repo.save(p1, p2, 'invalid')
        } else if (isDraw()) {
            repo.save(p1, p2, 'draw')
            observer.draw()
        } else if (p1Wins()) {
            repo.save(p1, p2, 'p1Wins')
            observer.p1Wins()
        } else {
            repo.save(p1, p2, 'p2Wins')
            observer.p2Wins()
        }
    }

    function isDraw() {
        return p1 === p2
    }

    function p1Wins() {

        return p1 === THROW.ROCK && p2 === THROW.SCISSORS ||
            p1 === THROW.PAPER && p2 === THROW.ROCK ||
            p1 === THROW.SCISSORS && p2 === THROW.PAPER
    }

    function eitherInvalid() {
        return VALID_THROWS.includes(p1) === false ||
            VALID_THROWS.includes(p2) === false
    }
}

class Requests {
    constructor(repo) {
        this.repo = repo;
    }

    play(p1, p2, observer) {
        new PlayRequest(p1, p2, observer, this.repo).process()
    }

    getHistory(observer) {
        observer.rounds(this.repo.getRounds());
    }
}

module.exports = {Requests, RESULT}