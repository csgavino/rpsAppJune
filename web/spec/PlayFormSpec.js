import ReactDOM from 'react-dom'
import React from 'react'
import PlayForm from '../src/PlayForm'
import ReactTestUtils from 'react-dom/test-utils'
import {Requests} from 'rps/src/play'
import {FakeRepo} from 'rps/src/fakeRepo'

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
        it('displays no rounds when no rounds', () => {
            ReactDOM.render(
                <PlayForm requests={new Requests(new FakeRepo())}/>,
                domFixture,
            )

            expect(domFixture.innerText).not.toContain('No game played')

            document.querySelector('button#history').click()

            expect(domFixture.innerText).toContain('No game played')
        })

        it('displays history when rounds played', () => {
            ReactDOM.render(
                <PlayForm requests={new Requests(new FakeRepo())}/>,
                domFixture,
            )

            const input1 = document.querySelector('input[name="player1"]')
            input1.value = 'rock'
            ReactTestUtils.Simulate.change(input1)

            const input2 = document.querySelector('input[name="player2"]')
            input2.value = 'scissors'
            ReactTestUtils.Simulate.change(input2)

            document.querySelector('button#submit').click()

            expect(domFixture.innerText).not.toContain('rock, scissors, Player 1 Wins!')

            document.querySelector('button#history').click()

            expect(domFixture.innerText).toContain('rock, scissors, Player 1 Wins!')
        })
    })
})
