import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import resultDescription from '../js/resultDescriptions';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultReady: false,
            selections: Object.keys(this.props.selections).map((key) => (this.props.selections[key])),
            selectionsCount: {}
        }
    }

    componentDidMount () {
        setTimeout(function() { 
            this.setState({resultReady: true})
        }.bind(this), 5000)
    }

    calculateResult () {
        var selections = this.state.selections;
        var countHash = this.state.selectionsCount;
        selections.forEach((selection) => {
            if (countHash[selection.party]) {
                countHash[selection.party] += 1;
            } else {
                countHash[selection.party] = 1;
            }
        })
        return countHash;
    }

    resultParty () {
        var count = this.calculateResult();
        var endResult = null;
        var equalParties = Object.keys(count).every((ele) => (
            count[ele] === 4
        ));
        let highestPartyCount = 0;
        if (equalParties === true) {
            endResult = "Free Thinker";
        } else {
            Object.keys(count).forEach((ele) => {
                if (count[ele] > highestPartyCount) {
                    highestPartyCount = count[ele];
                    endResult = ele;
                }
            })
        }
        if (this.equalResultOrNot(count)) {
            endResult = "Libertarian";
        }
        return resultDescription(endResult);
    }

    equalResultOrNot (count) {
        var equals5 = [];
        var equals6 = [];
        var equalOrNot = null;
        Object.keys(count).forEach((ele) => {
            if (count[ele] === 5) {
                equals5.push(ele);
            } else if (count[ele] === 6) {
                equals6.push(ele);
            }
        });
        if (equals5.length === 2) {
            equalOrNot = true;
        } else if (equals6.length === 2) {
            equalOrNot = true;
        } else {
            equalOrNot = false;
        }
        return equalOrNot;
    }

    render () {
        var result = this.resultParty()
        if (this.state.resultReady) {
            return (
                <div class='fade result-body'>
                    <h1>You're a {result.party}!</h1>
                    <p>{result.description}</p>
                    <img class='party-pic' src={result.url} />
                </div>
            )
        } else {
            return (
                <div>
                    <div class="loader">
                    
                    </div>
                 <h1>Calcluating your result... based on your political views...</h1>
                </div>
            )
        }
       
    }
 
}

export default Result;