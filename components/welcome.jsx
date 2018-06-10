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
                <h1>Welcome</h1>
                <div class="welcome-message">

                    <h1>Between Democrat, Republican, or Libertarian, find answer these questions to see which party you belong to!</h1>





                </div>
                <button>Start Quiz</button>
            </div>
        )
    }

}

export default Welcome;