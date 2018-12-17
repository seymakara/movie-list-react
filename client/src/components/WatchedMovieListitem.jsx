var React = require('react');

const WatchedMovieListItem = (props) => {
    return (
        <tr> {props.movie.title} </tr >
    )
}
export default WatchedMovieListItem