const {Requests} = require('../src/play');

describe('play function', () => {
    let requests
    beforeEach(() => {
        let repoStub = {
            save: () => {

            }
        }
        requests = new Requests(repoStub)
    })

    describe('win scenarios', () => {
        describe('p1 wins', () => {
            it('rock vs. scissors', () => {
                const observerSpy = jasmine.createSpyObj('observerSpy', ['p1Wins'])

                requests.play('rock', 'scissors', observerSpy)

                expect(observerSpy.p1Wins).toHaveBeenCalled()
            })

            it('paper vs. rock', () => {
                const observerSpy = jasmine.createSpyObj('observerSpy', ['p1Wins'])

                requests.play('paper', 'rock', observerSpy)

                expect(observerSpy.p1Wins).toHaveBeenCalled()
            })

            it('scissors vs. paper', () => {
                const observerSpy = jasmine.createSpyObj('observerSpy', ['p1Wins'])

                requests.play('scissors', 'paper', observerSpy)

                expect(observerSpy.p1Wins).toHaveBeenCalled()
            })
        })

        describe('p2 wins', () => {
            it('rock vs. paper', () => {
                const observerSpy = jasmine.createSpyObj('observerSpy', ['p2Wins'])

                requests.play('rock', 'paper', observerSpy)

                expect(observerSpy.p2Wins).toHaveBeenCalled()
            })

            it('paper vs. scissors', () => {
                const observerSpy = jasmine.createSpyObj('observerSpy', ['p2Wins'])

                requests.play('paper', 'scissors', observerSpy)

                expect(observerSpy.p2Wins).toHaveBeenCalled()
            })

            it('scissors vs. rock', () => {
                const observerSpy = jasmine.createSpyObj('observerSpy', ['p2Wins'])

                requests.play('scissors', 'rock', observerSpy)

                expect(observerSpy.p2Wins).toHaveBeenCalled()
            })
        })
    })

    describe('draw scenarios', () => {
        it('rock vs. rock', () => {
            const observerSpy = jasmine.createSpyObj('observerSpy', ['draw'])

            requests.play('rock', 'rock', observerSpy)

            expect(observerSpy.draw).toHaveBeenCalled()
        })

        it('paper vs. paper', () => {
            const observerSpy = jasmine.createSpyObj('observerSpy', ['draw'])

            requests.play('paper', 'paper', observerSpy)

            expect(observerSpy.draw).toHaveBeenCalled()
        })

        it('scissors vs. scissors', () => {
            const observerSpy = jasmine.createSpyObj('observerSpy', ['draw'])

            requests.play('scissors', 'scissors', observerSpy)

            expect(observerSpy.draw).toHaveBeenCalled()
        })
    })

    describe('save', () => {
        let observerStub;

        beforeEach(() => {
            observerStub = {
                invalid: () => {

                },
                p1Wins: () => {

                },
                p2Wins: () => {

                },
                draw: () => {

                }
            }
        });

        it('saves p1 wins', () => {
            let spyRepo = jasmine.createSpyObj('repo', ['save']);

            new Requests(spyRepo).play('rock', 'scissors', observerStub)

            expect(spyRepo.save).toHaveBeenCalledWith(
                'rock',
                'scissors',
                'p1Wins'
            );
        })

        it('saves p2 wins', () => {
            let spyRepo = jasmine.createSpyObj('repo', ['save']);

            new Requests(spyRepo).play('scissors', 'rock', observerStub)

            expect(spyRepo.save).toHaveBeenCalledWith(
                'scissors',
                'rock',
                'p2Wins'
            );
        })

        it('saves draw', () => {
            let spyRepo = jasmine.createSpyObj('repo', ['save']);

            new Requests(spyRepo).play('rock', 'rock', observerStub)

            expect(spyRepo.save).toHaveBeenCalledWith(
                'rock',
                'rock',
                'draw'
            );
        })

        it('saves invalid', () => {
            let spyRepo = jasmine.createSpyObj('repo', ['save']);

            new Requests(spyRepo).play('inoshishi', 'inoshishi', observerStub)

            expect(spyRepo.save).toHaveBeenCalledWith(
                'inoshishi',
                'inoshishi',
                'invalid'
            );
        })
    })

    describe('invalid scenarios', () => {
        it('rock vs. invalid', () => {
            const observerSpy = jasmine.createSpyObj('observerSpy', ['invalid'])

            requests.play('rock', Math.random(), observerSpy)

            expect(observerSpy.invalid).toHaveBeenCalled()
        })

        it('invalid vs. rock', () => {
            const observerSpy = jasmine.createSpyObj('observerSpy', ['invalid'])

            requests.play(Math.random(), 'rock', observerSpy)

            expect(observerSpy.invalid).toHaveBeenCalled()
        })

        it('invalid vs. invalid', () => {
            const observerSpy = jasmine.createSpyObj('observerSpy', ['invalid'])

            requests.play(Math.random(), Math.random(), observerSpy)

            expect(observerSpy.invalid).toHaveBeenCalled()
        })
    })

    describe('get history', () => {
        it('calls rounds', () => {
            let repoStub = {
                getRounds: () => [
                    {
                        p1Hand: 'rock',
                        p2Hand: 'scissors',
                        result: 'Player 1 Wins!'
                    }
                ]
            }
            let observer = jasmine.createSpyObj('observer', ['rounds'])


            new Requests(repoStub).getHistory(observer);


            expect(observer.rounds).toHaveBeenCalledWith([
                {
                    p1Hand: 'rock',
                    p2Hand: 'scissors',
                    result: 'Player 1 Wins!'
                }
            ])
        })
    })
})
