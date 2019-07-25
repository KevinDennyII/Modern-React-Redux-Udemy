import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault(); // keep the form from trying to submit automatically

        // this will not work, it thinks this is resolved to 'undefined'
        //  console.log(this.state.term);
    };

    // <form onSubmit={(event) => this.onFormSubmit())} className="ui form">
    // alternative way to solve the 'this' issue
    render() {
        return (
            <div className="ui segment">

                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
