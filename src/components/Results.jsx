import React from 'react';

const Results = ({score, len}) => {
	let percent = (score / len * 100), message = '';
	if(percent >= 80) {
		message = "Excellent!";
	} else if(percent < 80 && percent >= 60) {
		message = "Good!";
	} else {
		message = "You Suck";
	}
	return (
		<div className="well">
			<h4>You Got {score} out of {len} Correct</h4>
			<h1>{percent}% - {message}</h1>
			<hr/>
			<a href="/app">Take again</a>
		</div>
	);
};

export default Results;