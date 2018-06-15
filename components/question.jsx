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
        this.state = {
            questionIndex: 0,
            selectionsHash: {}
        }
    }

    answers () {
        var answers = Questions[this.state.questionIndex].answers;
        var renderAnswers = answers.map((answer) => (
            <label>
                <input onClick={this.getParty.bind(this)} type="radio" name="answer" value={`${answer.party}`} />
                {answer.result}<br/><br/><br/>
            </label>
        ));
        return renderAnswers;
    }

    getParty (event) {
        var newSelections = this.state.selectionsHash;
        newSelections[this.state.questionIndex] = {
            party: event.currentTarget.value,
            answerIndex: this.getElementIndex(event.currentTarget.parentNode)
        }
        this.setState({
            selectionsHash: newSelections,
        })
    }

    buttons () {
        if (this.state.questionIndex === 0) {
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
            questionIndex: this.state.questionIndex -= 1,
        })
        this.checkPrevious();
    }

    nextQuestion () {
        if (Boolean(this.state.selectionsHash[this.state.questionIndex])) {
            this.setState({
                questionIndex: this.state.questionIndex += 1,
            })
        } else {
            alert("You haven't selected a choice yet!");
        }
        this.checkNext();
    }

    checkPrevious () {
        var answersList = document.getElementsByTagName("input");
        answersList[this.state.selectionsHash[this.state.questionIndex].answerIndex].checked = true;
    }

    checkNext() {
        var answersList = document.getElementsByTagName("input");
        if (this.state.selectionsHash[this.state.questionIndex]) {
            answersList[this.state.selectionsHash[this.state.questionIndex].answerIndex].checked = true;
        } else {
            for (let i = 0; i<answersList.length; i++) {
                answersList[i].checked = false;
            }
        }
    }

    getElementIndex (element) {
        const elementIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
        return elementIndex;
    }

    render () {
        var currentQuestion = Questions[this.state.questionIndex];
        if (this.state.questionIndex <= 11) {
            return (
            <div>
                <h1>POLITIQUIZ</h1>
                <div ref='questionBody' class='question-body'>
                    <h1>Question {this.state.questionIndex + 1} of 12</h1>
                    <h1 class='question-subject'>{currentQuestion.subject}</h1>
                    <h1 class='question-question'>{currentQuestion.question}</h1>
                    <form ref="answersList" class='answers'>
                        {this.answers()}
                    </form>
                </div> 
                {this.buttons()}
            </div>
            )
        } else {
            return (
                <div>
                    <h1>POLITIQUIZ</h1>
                    <Result selections={this.state.selectionsHash}/>
                </div>
            )
        }

       
    }

}

export default Question;