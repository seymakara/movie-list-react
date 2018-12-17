var React = require('react');

const MovieListItem = (props) => {
    return (
        <tr> {props.movie.title} < button onClick={() => props.makeWatched(props.movie.title)} > watched</button ></tr >
    )
}
export default MovieListItem