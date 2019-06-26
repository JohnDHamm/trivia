import React from 'react'
import styled from 'styled-components'
import sharedStyles from '../styles/shared_styles'

const Button = styled.div`
    height: 60px;
    line-height: 60px;
    color: #888;
    font-size: 1.5rem;
    background: #fff;
    border: 2px solid #888;
    border-radius: 30px;
    padding-left: 25px;
    margin: 1rem 0;

    @media screen and (max-width: ${sharedStyles.SCREEN.SMALL})  {
        height: 40px;
        line-height: 40px;
        font-size: 1rem;
        padding-left: 15px;
        border-radius: 20px;
        margin: 0.75rem 0;
    }

    :hover {
        color: ${sharedStyles.COLOR.GREEN};
        transform: scale(1.025);
        border: 2px solid ${sharedStyles.COLOR.GREEN};
    }
`
export default function AnswerButton({answer, isCorrectAnswer, submitAnswer}) {
    return (
        <Button onClick={() => submitAnswer(isCorrectAnswer)}>{answer}</Button>
    )
}
