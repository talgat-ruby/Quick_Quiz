import React, { Component } from 'react';
import ReactDom from 'react-dom';
import QuestionList from './components/QuestionList';
import Scorebox from './components/Scorebox';
import Results from './components/Results'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is responsible React?',
					choices: [
						{
							id: 'a',
							text: 'M - Model'
						},
						{
							id: 'b',
							text: 'V - View'
						},
						{
							id: 'c',
							text: 'C - Controller'
						},
						{
							id: 'd',
							text: 'Full MVC'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'Why React is great?',
					choices: [
						{
							id: 'a',
							text: 'It is fast'
						},
						{
							id: 'b',
							text: 'It has min of staff to learn'
						},
						{
							id: 'c',
							text: 'It is easy'
						},
						{
							id: 'd',
							text: 'All above'
						}
					],
					correct: 'd'
				},
				{
					id: 3,
					text: 'Why React needs Redux?',
					choices: [
						{
							id: 'a',
							text: 'Because Redux provides jQuery'
						},
						{
							id: 'b',
							text: 'Makes awesome design'
						},
						{
							id: 'c',
							text: 'Creates states handler'
						},
						{
							id: 'd',
							text: 'Version control system'
						}
					],
					correct: 'c'
				},
				{
					id: 4,
					text: 'Do you need to learn React?',
					choices: [
						{
							id: 'a',
							text: 'Definetly!'
						},
						{
							id: 'b',
							text: 'Never!'
						},
						{
							id: 'c',
							text: 'Probably'
						},
						{
							id: 'd',
							text: 'Not Sure'
						}
					],
					correct: 'a'
				}
			],
			score: 0,
			current: 1
		};
	}

	incrementScore() {
		this.setState((prev, cur) => {
			return {
				score: prev.score + 1
			};
		});
	}

	incrementCurrent() {
		this.setState((prev, cur) => {
			return {
				current: prev.current + 1
			};
		});
	}

	render() {
		let componentBox = '';
		if(this.state.current <= this.state.questions.length) {
			componentBox = <Scorebox {...this.state}/>;
		} else {
			componentBox = <Results score = {this.state.score} len = {this.state.questions.length} />;
		}
		return (
			<div>
				{componentBox}
				<QuestionList questions={this.state.questions}
							current = {this.state.current}
							incrementScore = {() => this.incrementScore()}
							incrementCurrent = {() => this.incrementCurrent()}/>
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("app"));