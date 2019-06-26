import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div style={{background: '#5500CC', border: '1px solid blue', color: 'white'}}>
                <p>SCORE: {this.props.score} / {this.props.roundTotalQuestions}</p>
            </div>
        )
    }
}
