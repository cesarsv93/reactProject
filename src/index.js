import React from 'react';
import ReactDom from 'react-dom';

const API_KEY = 'AIzaSyB4Hw2M1G1kGOlkgxo1rO5MG9cIqDIpA5A';

// Create a new component. This component should produce some html.
const App = () => { 
  //Component -> is an object or a function that return some html
  return <div>Hi!</div>;
}
// Take this component's generated html and put it on the page (in the dom)

ReactDom.render(<App />, document.querySelector('.container'));
