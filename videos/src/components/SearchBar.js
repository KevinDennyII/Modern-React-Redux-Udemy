import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};  //search term

    // callback method for onChange
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    // callback method for onSubmit
    onFormSubmit = event => {
        event.preventDefault(); // prevent refresh when user hits 'enter' button on keyboard

        // TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
