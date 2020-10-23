import React from 'react';

// var SearchBar = (props) => {
//   return (
//   <div>
//     <form>
//       <input name="item"></input>
//       <button>Search</button>
//     </form>
//   </div>
//   )
// }

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log('event: ', event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchForMovie(this.state);
    this.reinitializeState();
  }

  reinitializeState() {
    this.setState({
      movieSearch: ''
    })
  }

  render() {
    return (
      <div>
      <form>
        <input onChange={this.handleChange} name="movieSearch" value={this.state.movieSearch}></input>
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    </div>
    )
  }
}

export default SearchBar;