const {Requests} = require('../src/play');

describe('play function', () => {
    beforeEach(() => {
    })

    describe('win scenarios', () => {
        it('paper vs. rock', () => {
            const observer = jasmine.createSpyObj("observer", ['p1Wins'])

            new Requests().play('paper', 'rock', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('rock vs. paper', () => {
            const observer = jasmine.createSpyObj("observer", ['p2Wins'])

            new Requests().play('rock', 'paper', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })
})