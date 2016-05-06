import React from 'react';
import Question from './Question';

const QuestionList = ({questions, incrementScore, incrementCurrent, current}) => {
	return (
		<div className="questions">
			{ 
				questions.map(question => {
					if(question.id === current) {
						return <Question question={question} 
										incrementScore = {incrementScore}
										incrementCurrent = {incrementCurrent}
										key={question.id}/>
					}
				})
			}
		</div>
	);
};

export default QuestionList;