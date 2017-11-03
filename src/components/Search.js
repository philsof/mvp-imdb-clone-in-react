import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = 'https://api.themoviedb.org/3/search/multi?api_key=8f064c59af6710d46fa325d31bf347ab&language=en-US&query=' + this.state.value +'&page=1&include_adult=false'
    fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          this.props.onUpdate(data.results[0]);
        }.bind(this))
      }.bind(this)
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
