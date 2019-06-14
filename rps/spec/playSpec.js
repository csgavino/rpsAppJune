const {Requests} = require('../src/play');

describe('play function', () => {
    let requests
    beforeEach(() => {
        requests = new Requests()
    })

    describe('win scenarios', () => {
        describe('p1 wins', () => {
            it('rock vs. scissors', () => {
                const observer = jasmine.createSpyObj('observer', ['p1Wins'])

                requests.play('rock', 'scissors', observer)

                expect(observer.p1Wins).toHaveBeenCalled()
            })

            it('paper vs. rock', () => {
                const observer = jasmine.createSpyObj('observer', ['p1Wins'])

                requests.play('paper', 'rock', observer)

                expect(observer.p1Wins).toHaveBeenCalled()
            })

            it('scissors vs. paper', () => {
                const observer = jasmine.createSpyObj('observer', ['p1Wins'])

                requests.play('scissors', 'paper', observer)

                expect(observer.p1Wins).toHaveBeenCalled()
            })
        })

        describe('p2 wins', () => {
            it('rock vs. paper', () => {
                const observer = jasmine.createSpyObj('observer', ['p2Wins'])

                requests.play('rock', 'paper', observer)

                expect(observer.p2Wins).toHaveBeenCalled()
            })

            it('paper vs. scissors', () => {
                const observer = jasmine.createSpyObj('observer', ['p2Wins'])

                requests.play('paper', 'scissors', observer)

                expect(observer.p2Wins).toHaveBeenCalled()
            })

            it('scissors vs. rock', () => {
                const observer = jasmine.createSpyObj('observer', ['p2Wins'])

                requests.play('scissors', 'rock', observer)

                expect(observer.p2Wins).toHaveBeenCalled()
            })
        })
    })

    describe('draw scenarios', () => {
        it('rock vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['draw'])

            requests.play('rock', 'rock', observer)

            expect(observer.draw).toHaveBeenCalled()
        })

        it('paper vs. paper', () => {
            const observer = jasmine.createSpyObj('observer', ['draw'])

            requests.play('paper', 'paper', observer)

            expect(observer.draw).toHaveBeenCalled()
        })

        it('scissors vs. scissors', () => {
            const observer = jasmine.createSpyObj('observer', ['draw'])

            requests.play('scissors', 'scissors', observer)

            expect(observer.draw).toHaveBeenCalled()
        })
    })

    describe('invalid scenarios', () => {
        it('rock vs. invalid', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play('rock', Math.random(), observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('invalid vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play(Math.random(), 'rock', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('invalid vs. invalid', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play(Math.random(), Math.random(), observer)

            expect(observer.invalid).toHaveBeenCalled()
        })
    })
})
