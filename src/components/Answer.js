import React from 'react';

const Answer = ({answerText, onSelectAnswer, index, currentAnswer, correctAnswer}) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    return (
        <div className='answer' onClick={() => onSelectAnswer(answerText)}>
            <div className='answer-letter'>{letterMapping[index]}</div>
            <div className='answer-text'>{answerText}</div>
        </div>
    );
};

export default Answer;