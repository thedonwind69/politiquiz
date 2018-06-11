import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
            <div class='fade welcome-message'>
                <h1 class='politiquiz animated bounceInDown'>POLITIQUIZ</h1>
                <h1>Between Democrat, Republican, or Libertarian, answer these questions to see which party you belong to!</h1>
            </div>
            <Link to="/questions"><button>Start Quiz</button></Link>
            </div>
        )
    }

}

export default Welcome;