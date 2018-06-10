import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Welcome from './welcome';
import Question from './question';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Route exact path="/" component={Welcome} />
                <Route path='/questions' component={Question} />
            </div>
        )
    }

}

export default App;