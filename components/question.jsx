import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Questions from '../js/questions';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.questionIndex = 0;
    }

    answers () {
        var answers = Questions[this.questionIndex].answers;
        var renderAnswers = answers.map((answer) => (
                <li>{answer.result}</li>
        ));
        return renderAnswers;
    }

    buttons () {
        if (this.questionIndex === 0) {
            return (
                <button onClick={this.nextQuestion.bind(this)}>Next</button>
            )
        } else {
            return (
                <div>
                <button onClick={this.prevQuestion.bind(this)}>Previous</button>
                <button onClick={this.nextQuestion.bind(this)}>Next</button>
                </div>
            )
        }
    }

    prevQuestion () {
        this.setState({
            questionIndex: this.questionIndex -= 1,
        })
    }

    nextQuestion () {
        this.setState({
            questionIndex: this.questionIndex += 1,
        })
    }

    render () {
        console.log(this.questionIndex);
        var currentQuestion = Questions[this.questionIndex];
        console.log(currentQuestion);

        return (
            <div>
                <h1>Question {this.questionIndex + 1} of 12</h1>
                <h1>{currentQuestion.subject}</h1>
                <h1>{currentQuestion.question}</h1>

                <ul>
                    {this.answers()}
                </ul>

                <div>
                    {this.buttons()}
                </div>

            </div>
        )
    }

}

export default Question;