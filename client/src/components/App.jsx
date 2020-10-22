import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

// const App = (props) => (
//   <div MovieList />

// );
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: movies
    }
    // this.searchForMovie = this.searchForMovie.bind(this)
  }

  searchForMovie(movieToSearchFor) {
    // Transfer the state of searchBar to a variable on clicking search
    const currentSearch = movieToSearchFor
    console.log(currentSearch);
    console.log('this.movies: ', this.movies)
    for (let i = 0; i < this.movies.length; i++) {
      if (currentSearch === this.movies[i].title) {
        console.log('YUP')
      }
    }
  }

  render() {
    return (
      <div>
        <h5>Search List</h5>
        <SearchBar movies={this.state.films} searchForMovie={this.searchForMovie}/>
        <br></br>
        <MovieList movies={this.state.films}/>
      </div>
    )
  }
}

export default App;

//Steps
// npm install
// npm start
// new terminal
  // live-server
  // ctrl-c to cancel live server
  // npm run build
  // live-server (on another window)