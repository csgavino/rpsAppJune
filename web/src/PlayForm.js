import React from 'react'

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null
        }
    }

    onClickSubmit() {
        this.props.requests.play(
            this.state.player1Input,
            this.state.player2Input,
            this
        )
    }

    invalid() {
        this.setState({result: 'Invalid Input'})
    }

    p1Wins() {
        this.setState({result: 'Player 1 Wins!'})
    }

    p2Wins() {
        this.setState({result: 'Player 2 Wins!'})
    }

    draw() {
        this.setState({result: 'Draw!'})
    }

    onChangeP1Input(event) {
        this.setState({
            player1Input: event.target.value
        })
    }

    onChangeP2Input(event) {
        this.setState({
            player2Input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>RPS App</h1>
                <input name='player1' onChange={this.onChangeP1Input.bind(this)}/>
                <input name='player2' onChange={this.onChangeP2Input.bind(this)}/>
                <button onClick={this.onClickSubmit.bind(this)}>登録</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}
