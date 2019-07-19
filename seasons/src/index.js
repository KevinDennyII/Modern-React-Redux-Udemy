import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from  './SeasonDisplay';

class App extends React.Component {
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    state = { lat: null, errorMessage:''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // we called setState to update our state object!!!!
            position => this.setState({ lat: position.coords.latitude }),
            // WE DID NOT!!
            // this.state.late = position.coords.latitude
            err => this.setState({ errorMessage: err.message})
        );
    }

    // React says we have to define render()
    // render is called twice: once while the browser is loaded then the
    // second time once the state object is updated...CONDITIONAL RENDERING IS BEING SHOWN BELOW
    render() {
            // if we have an error
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>
        }
            // no error
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>

        }
        //
            return <div>Loading!...</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
