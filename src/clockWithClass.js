import React from 'react';

export default class ClockClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return(
            <div>
                <h2>Hello World</h2>
                <p>The current time from ClockClass is {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}