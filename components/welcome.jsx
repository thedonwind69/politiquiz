import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Question from './question';
class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            started: false
        }
    }

    startQuiz () {
        this.setState({started: true});
    }

    render () {
        if (this.state.started) {
            return (<Question/>)
        } else {
            return (
                <div>
                    <div class='fade welcome-message animated zoomInUp'>
                        <h1 class='politiquiz'>POLITIQUIZ</h1>
                        <h1>Between Democrat, Republican, or Libertarian, answer these questions to see which party you belong to!</h1>
                    </div>
                    <button class='start-button animated bounceInUp' onClick={this.startQuiz.bind(this)}>Start Quiz</button>
                </div>
            )
        }
    }
}

export default Welcome;