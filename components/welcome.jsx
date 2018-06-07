import React from 'react';
import Questions from '../js/questions';
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
                <h1>Welcome</h1>
                



                <button>Start Quiz</button>
            </div>
        )
    }

}

export default Welcome;