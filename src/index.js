import React from 'react';
import ReactDom from 'react-dom';

function tick() {
  const Element = (
    <div>
      <h2>Hello World</h2>
      <p> Current Time is: {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  
}
