import ReactDOM from 'react-dom'
import React from 'react'
import PlayForm from '../src/PlayForm'
import ReactTestUtils from 'react-dom/test-utils'
import {Requests} from 'rps/src/play'

describe('WebSpec', function () {
    let domFixture

    beforeEach(() => {
        domFixture = document.createElement('div')
        document.querySelector('body')
            .appendChild(domFixture)
    })

    afterEach(() => {
        domFixture.remove()
    })

    describe('PlayForm', () => {
        it('displays Invalid Input!', () => {
            let requestsStub = {
                play: (p1, p2, observer) => {
                    observer.invalid()
                }
            }

            ReactDOM.render(
                <PlayForm requests={requestsStub}/>,
                domFixture,
            )

            expect(domFixture.innerText).not.toContain('Invalid Input')

            document.querySelector('button#submit').click()

            expect(domFixture.innerText).toContain('Invalid Input')
        })

        it('displays Player 1 Wins!', () => {
            let requestsStub = {
                play: (p1, p2, observer) => {
                    observer.p1Wins()
                }
            }

            ReactDOM.render(
                <PlayForm requests={requestsStub}/>,
                domFixture,
            )

            expect(domFixture.innerText).not.toContain('Player 1 Wins!')

            document.querySelector('button#submit').click()

            expect(domFixture.innerText).toContain('Player 1 Wins!')
        })

        it('displays Player 2 Wins!', () => {
            let requestsStub = {
                play: (p1, p2, observer) => {
                    observer.p2Wins()
                }
            }

            ReactDOM.render(
                <PlayForm requests={requestsStub}/>,
                domFixture,
            )

            expect(domFixture.innerText).not.toContain('Player 2 Wins!')

            document.querySelector('button#submit').click()

            expect(domFixture.innerText).toContain('Player 2 Wins!')
        })

        it('displays Draw!', () => {
            let requestsStub = {
                play: (p1, p2, observer) => {
                    observer.draw()
                }
            }

            ReactDOM.render(
                <PlayForm requests={requestsStub}/>,
                domFixture,
            )

            expect(domFixture.innerText).not.toContain('Draw!')

            document.querySelector('button#submit').click()

            expect(domFixture.innerText).toContain('Draw!')
        })

        it('calls Play with input text', () => {
            let requestsSpy = jasmine.createSpyObj('observerSpy', ['play'])

            ReactDOM.render(
                <PlayForm requests={requestsSpy}/>,
                domFixture,
            )

            const input1 = document.querySelector('input[name="player1"]')
            input1.value = 'rock'
            ReactTestUtils.Simulate.change(input1)

            const input2 = document.querySelector('input[name="player2"]')
            input2.value = 'paper'
            ReactTestUtils.Simulate.change(input2)

            document.querySelector('button#submit').click()

            expect(requestsSpy.play).toHaveBeenCalledWith(
                'rock',
                'paper',
                jasmine.any(Object)
            )
        })

        it('saves when you click on play', () => {
            let repoSpy = jasmine.createSpyObj(
                'repoSpy', ['save'])

            ReactDOM.render(
                <PlayForm requests={new Requests(repoSpy)}/>,
                domFixture,
            )

            const input1 = document.querySelector('input[name="player1"]')
            input1.value = 'rock'
            ReactTestUtils.Simulate.change(input1)

            const input2 = document.querySelector('input[name="player2"]')
            input2.value = 'scissors'
            ReactTestUtils.Simulate.change(input2)

            document.querySelector('button#submit').click()

            expect(repoSpy.save).toHaveBeenCalledWith(
                'rock',
                'scissors',
                'Player 1 Wins!'
            )
        })

        it('displays history', () => {
            let game = {
                p1Hand: 'rock',
                p2Hand: 'scissors',
                result: 'Player 1 Wins!'
            }

            let requestsStub = {
                getHistory: (observer) => {
                    observer.rounds([game])
                }
            }

            ReactDOM.render(
                <PlayForm requests={requestsStub}/>,
                domFixture,
            )

            expect(domFixture.innerText).not.toContain('rock, scissors, Player 1 Wins!')

            document.querySelector('button#history').click()

            expect(domFixture.innerText).toContain('rock, scissors, Player 1 Wins!')
        })
    })
})
