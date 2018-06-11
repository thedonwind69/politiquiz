import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultReady: false
        }
    }

    componentDidMount () {
        setTimeout(function() { 
            this.setState({resultReady: true})
        }.bind(this), 5000)
    }

    render () {
        if (this.state.resultReady) {
            return (
                <div class='fade'>
                    <h1>Result bitch!!!</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <div class="loader">
                    
                    </div>
                 <h1>Loading bitch...</h1>
                </div>
            )
        }
       
    }



    
}

export default Result;