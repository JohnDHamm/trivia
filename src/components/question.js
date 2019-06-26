import React, { Component } from 'react'

export default class Question extends Component {
    renderIncorrectAnswers() {
        return this.props.incorrectAnswers.map(ans => {
            return (
                <p key={ans}>{ans}</p>
            )
        })    
    }

    render() {
        return (
            <div style={{background: '#DDD', color: '#AA0033'}}>
                <p>Question #{this.props.questionCounter}</p>
                <p>{this.props.question}</p>
                <p>{this.props.correctAnswer}</p>
                {this.renderIncorrectAnswers()}
            </div>
        )
    }
}
