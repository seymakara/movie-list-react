var React = require('react');
var ReactDOM = require('react-dom');
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import WatchedMovieList from './components/WatchedMovieList.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { title: 'Mean Girls' },
                { title: 'Hackers' },
                { title: 'The Grey' },
                { title: 'Sunshine' },
                { title: 'Ex Machina' },
            ],
            watchedMovies: [],
        }
        this.onSearch = this.onSearch.bind(this);
        this.makeWatched = this.makeWatched.bind(this)
    }

    onSearch(term) {
        var searchRes = [];
        var caseIgnoredTerm = new RegExp(term, 'i')
        var found = false
        for (var movie of this.state.movies) {
            if (caseIgnoredTerm.test(movie.title)) {
                searchRes.push({ title: movie.title })
                found = true
            }
        }

        if (found === false) {
            // var noResult = this.state.movies.slice();
            var noResult = [{ title: "No movie by that name found!" }];
            this.setState({
                movies: noResult
            })
        } else {
            this.setState({
                movies: searchRes
            })
        }
    }

    makeWatched(movie) {

        const result = this.state.movies.filter(movieItem => movieItem.title !== movie);
        this.setState({
            movies: result
        })

        var watchedList = this.state.watchedMovies.slice();
        watchedList.push({ title: movie })
        this.setState({
            watchedMovies: watchedList
        })
    }


    render() {
        console.log("watchedmovies", this.state.watchedMovies)
        return (
            <div>
                <h3>Movie List</h3>
                <h2>To Watch</h2>
                <Search onSearch={this.onSearch} />
                <MovieList movies={this.state.movies} makeWatched={this.makeWatched} />
                <h2>Watched</h2>
                <WatchedMovieList watchedMovies={this.state.watchedMovies} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));