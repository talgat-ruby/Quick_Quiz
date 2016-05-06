import React from 'react';

const Scorebox = (props) => {
	return (
		<div className="well">
			Question {props.current} out of {props.questions.length} 
			<span className="pull-right">
				<strong>Score: {props.score}</strong>
			</span>
		</div>
	);
};

export default Scorebox;