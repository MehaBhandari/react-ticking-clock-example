import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h2>Hello World</h2>
      <p> Current Time is: {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick(), 1000);