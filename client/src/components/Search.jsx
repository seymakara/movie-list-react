var React = require('react');

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
    }

    onChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='Search...' onChange={this.onChange} />
                <button onClick={(this.search)}>Go</button>
            </div>
        )
    }
}

export default Search;