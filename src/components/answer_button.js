import React from 'react'

export default function AnswerButton({answer, isCorrectAnswer, submitAnswer}) {
    return (
        <div 
            style={{color: '#338822', background: 'white', border: '1px solid #338822', borderRadius: '3px', padding: '1rem', margin: '0.25rem'}}
            onClick={() => submitAnswer(isCorrectAnswer)}>
            {answer}
        </div>
    )
}
