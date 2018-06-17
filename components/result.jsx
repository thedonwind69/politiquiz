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
        console.log('equalornot');
        console.log(this.equalResultOrNot(count));
        return endResult;
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
        console.log('arrays');
        console.log(equals5);
        console.log(equals6);
        return equalOrNot;
    }

    render () {
        if (this.state.resultReady) {
            console.log(this.calculateResult());
            console.log(this.resultParty());
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