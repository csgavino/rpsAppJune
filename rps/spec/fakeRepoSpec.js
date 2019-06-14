const {FakeRepo} = require('../src/fakeRepo');

describe('FakeRepo', () => {
    let repo

    beforeEach(() => {
        repo = new FakeRepo();
    })

    it('returns no rounds', () => {
        let rounds = repo.getRounds();

        expect(rounds.length).toEqual(0);
    })

    it('returns rounds when they exist', () => {
        repo.save('rock', 'scissors', 'p1Wins')

        let rounds = repo.getRounds();

        expect(rounds.length).toEqual(1);
        expect(rounds[0].p1Hand).toEqual('rock')
        expect(rounds[0].p2Hand).toEqual('scissors')
        expect(rounds[0].result).toEqual('p1Wins')
    })
})