import React, { Component } from 'react';

class Person extends Component {  
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
}

export default Person;
