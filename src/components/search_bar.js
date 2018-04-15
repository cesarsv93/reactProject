import React, { Component } from 'react';
//From functional-based component to class-based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() { //Always have to define a render method
    return (
      <div>
        <input onChange={e => this.setState({ term: e.target.value })} />
      </div>
    ) 
  }
}

export default SearchBar;


//Normal way

// render() { //Always have to define a render method
//   return <input onChange={this.onInputChange}/>;
// }

// onInputChange(e) {
//   console.log(event.target.value);
// }