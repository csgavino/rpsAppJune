const {Requests} = require('../src/play');

describe('play function', () => {
    let requests
    beforeEach(() => {
        requests = new Requests()
    })

    describe('win scenarios', () => {
        it('paper vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['p1Wins'])

            requests.play('paper', 'rock', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('rock vs. paper', () => {
            const observer = jasmine.createSpyObj('observer', ['p2Wins'])

            requests.play('rock', 'paper', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('rock vs. scissors', () => {
            const observer = jasmine.createSpyObj('observer', ['p1Wins'])

            requests.play('rock', 'scissors', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs. rock', () => {
            const observer = jasmine.createSpyObj('observer', ['p2Wins'])

            requests.play('scissors', 'rock', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('scissors vs. paper', () => {
            const observer = jasmine.createSpyObj('observer', ['p1Wins'])

            requests.play('scissors', 'paper', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('paper vs. scissors', () => {
            const observer = jasmine.createSpyObj('observer', ['p2Wins'])

            requests.play('paper', 'scissors', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
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

    describe('error scenarios', () => {
        it('null vs. null', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play(null, null, observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('null vs. inoshishi', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play(null, 'inoshishi', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('inoshishi vs. null', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play('inoshishi', null, observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('inoshishi vs. inoshishi', () => {
            const observer = jasmine.createSpyObj('observer', ['invalid'])

            requests.play('inoshishi', 'inoshishi', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })
    })
})
