import React from 'react';

const Question = ({question, incrementScore, incrementCurrent}) => {
	function onChange(el) {
		el.preventDefault();
		if(el.target.value === question.correct) {
			incrementScore();
		}
		incrementCurrent();
	}

	return (
		<div className="well">
			<h3>{question.text}</h3>
			<hr/>
			<ul className="list-group">
				{
					question.choices.map(choice => {
						return (
							<li className="list-group-item" key={choice.id}>
								{choice.id} <input type="radio" onChange={(el) => onChange(el)} name={question.id} value={choice.id} /> {choice.text}
							</li>
						)
					})
				}
			</ul>
		</div>
	);
};

export default Question;