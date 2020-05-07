import React from 'react';
import ReactDOM from 'react-dom';
import ClockWithProps from './clockWithProps';
import ClockClass from './clockWithClass';

function Clock() {
  return (
    <div>
      <h2>Hello World</h2>
      <p> Current Time is: {new Date().toLocaleTimeString()}.</p>
    </div>
  );
} 
function App() {
  return (
    <div>
      <Clock /> <hr />
      <ClockWithProps date = {new Date()} /> <hr />
      <ClockClass />
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);