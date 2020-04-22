import React from 'react';
export default function ClockWithProps(props) {
    return (
        <div>
        <h2>Hello World</h2>
        <p> Current Time with props is: {props.date.toLocaleTimeString()}.</p>
      </div>
    );
}