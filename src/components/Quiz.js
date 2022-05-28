import React, { useContext, useEffect } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';


const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiURL = 'https://opentdb.com/api.php?amount=10&category=22&type=multiple&encode=url3986';

    useEffect(() => {
        if(quizState.questions.length > 0) {
            return;
        }
        console.log(useEffect);
        fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
            console.log('data', data);
            dispatch({type: 'LOADED_QUESTIONS', payload: data.results})
        })
    })
    return (
        <div className='quiz'>
            {quizState.showResults && (
                <div className='results'>
                    <div className='congratulations'>Congratulations</div>
                    <div className='results-info'>
                        <div>You have complited the quiz.</div>
                        <div>You have {quizState.correctAnswersCount} of {quizState.questions.length}</div>
                        <div className='next-button' onClick={() => dispatch({ type: 'RESTART'})}>Restart</div>
                    </div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length > 0 && ( <div>
                <div className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length} </div>
                <Question />
                <div className='next-button'
                onClick={() => dispatch({ type: "NEXT_QUESTION"})}>Next question</div>
            </div>)}
        </div>
    );
};

export default Quiz;