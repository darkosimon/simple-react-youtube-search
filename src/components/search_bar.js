import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { search_input: "" };
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    placeholder=' search video'
                    value={this.state.search_input}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );

        /*return <input onChange={this.onInputChange} />;*/
    }


    onInputChange(search_input) {
        this.setState({ search_input: search_input });
        this.props.onSearchInputChange(search_input);
    }
}


export default SearchBar;