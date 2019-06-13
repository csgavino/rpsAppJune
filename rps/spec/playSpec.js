const {Requests} = require('../src/play');

describe('play function', () => {
    beforeEach(() => {
    })

    describe('win scenarios', () => {
        it('paper vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['p1Wins'])

            new Requests().play('paper', 'rock', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('rock vs. paper', () => {
            const observer = jasmine.createSpyObj('observer', ['p2Wins'])

            new Requests().play('rock', 'paper', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('rock vs. scissors', () => {
            const observer = jasmine.createSpyObj('observer', ['p1Wins'])

            new Requests().play('rock', 'scissors', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['p2Wins'])

            new Requests().play('scissors', 'rock', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('scissors vs. paper', () => {
            const observer = jasmine.createSpyObj('observer', ['p1Wins'])

            new Requests().play('scissors', 'paper', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('paper vs. scissors', () => {
            const observer = jasmine.createSpyObj('observer', ['p2Wins'])

            new Requests().play('paper', 'scissors', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('draw scenarios', () => {
        it('rock vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['draw'])

            new Requests().play('rock', 'rock', observer)

            expect(observer.draw).toHaveBeenCalled()
        })

        it('paper vs. paper', () => {
            const observer = jasmine.createSpyObj('observer', ['draw'])

            new Requests().play('paper', 'paper', observer)

            expect(observer.draw).toHaveBeenCalled()
        })

        it('scissors vs. scissors', () => {
            const observer = jasmine.createSpyObj('observer', ['draw'])

            new Requests().play('scissors', 'scissors', observer)

            expect(observer.draw).toHaveBeenCalled()
        })
    })

    describe('error scenarios', () => {
        it('null vs. null', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            new Requests().play(null, null, observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('null vs. inoshishi', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            new Requests().play(null, 'inoshishi', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('inoshishi vs. null', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            new Requests().play('inoshishi', null, observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('inoshishi vs. inoshishi', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            new Requests().play('inoshishi', 'inoshishi', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })
    })
})
