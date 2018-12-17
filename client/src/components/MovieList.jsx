var React = require('react');
import MovieListItem from './MovieListitem.jsx';

const MovieList = (props) => {
    const MovielistItems = props.movies.map((movie) =>
        <MovieListItem movie={movie} makeWatched={props.makeWatched} key={movie.title.toString()} />
    );
    return (
        <table className="movieTable">
            {MovielistItems}
        </table>
    )
}
export default MovieList;