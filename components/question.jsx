import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Questions from '../js/questions';
import Result from './result';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.questionIndex = 0;
    }

    answers () {
        var answers = Questions[this.questionIndex].answers;
        var renderAnswers = answers.map((answer) => (
            <li>
                <input onClick={this.getParty.bind(this)} type="radio" name="answer" value={`${answer.party}`} />
                {answer.result}
            </li>
        ));
        return renderAnswers;
    }

    getParty (event) {
        console.log(event.currentTarget.value);
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

    componentDidUpdate () {
        var questionBody = ReactDOM.findDOMNode(this.refs.questionBody);
        if (questionBody) {
             questionBody.classList.toggle("fade");
        }
    }

    render () {
  
        var currentQuestion = Questions[this.questionIndex];
        if (this.questionIndex <= 11) {
            return (
            <div>
                <h1>POLITIQUIZ</h1>
                <div ref='questionBody' class='question-body fade'>
                    <h1>Question {this.questionIndex + 1} of 12</h1>
                    <h1>{currentQuestion.subject}</h1>
                    <h1>{currentQuestion.question}</h1>
                    <ul>
                        {this.answers()}
                    </ul>
                </div> 
                {this.buttons()}
            </div>
            )
        } else {
            return (
                <div>
                    <h1>POLITIQUIZ</h1>
                    <Result />
                </div>
            )
        }

       
    }

}

export default Question;