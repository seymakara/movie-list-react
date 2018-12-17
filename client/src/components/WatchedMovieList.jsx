var React = require('react');
import WatchedMovieListItem from './WatchedMovieListitem.jsx';

const WatchedMovieList = (props) => {
    const watchedMovielistItems = props.watchedMovies.map((movie) =>
        <WatchedMovieListItem movie={movie} key={movie.title.toString()} />
    );
    return (
        <table className="movieTable">
            {watchedMovielistItems}
        </table>
    )
}
export default WatchedMovieList;