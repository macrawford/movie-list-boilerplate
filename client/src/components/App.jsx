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
  {title: 'Ex Machina'},
  {title: 'Mean Streets'},
  {title: 'Eternal Sunshine of the Spotless Mind'}
]

var matchingResults = [];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: movies
    }
    this.searchForMovie = this.searchForMovie.bind(this)
    // When I un-comment the above line, it messes up my code at (I think) the line where I write ISSUE below
  }

  searchForMovie(movieToSearchFor) {
    // How to
    const currentSearch = movieToSearchFor
    console.log('currentSearch: ', currentSearch);
    var searchArray = [];
    //ISSUE on line below "Cannot read property length of undefined"
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.indexOf(currentSearch.movieSearch) > -1) {
        searchArray.push(movies[i])
      }
      // if (currentSearch.movieSearch === movies[i].title) {
      //   searchArray.push(movies[i])
      //   console.log('searchArray: ', searchArray)
      // }
    }
    this.setState({
      films: searchArray
    })
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