class FakeRepo {
    constructor() {
        this.rounds = [];
    }

    save(p1, p2, result) {
        let round = {
            p1Hand: p1,
            p2Hand: p2,
            result: result
        }
        this.rounds = [
            ...this.rounds,
            round
        ]
    }

    getRounds() {
        return this.rounds;
    }
}

module.exports = {FakeRepo}