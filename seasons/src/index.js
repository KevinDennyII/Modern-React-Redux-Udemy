import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position =>  {
                // we called setState to update our state object!!!!
                this.setState({ lat: position.coords.latitude });
                // WE DID NOT!!
                // this.state.late = position.coords.latitude
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }

    // React says we have to define render()
    // render is called twice: once while the browser is loaded then the
    // second time once the state object is updated
    render() {
            // if we have an error
            if (this.state.errorMessage && ! this.state.lat){
                return <div>Error: {this.state.errorMessage} </div>
            }
            // no error
            if (!this.state.errorMessage && this.state.lat){
                return <div>Latitude: {this.state.lat} </div>
            }
            //
            return
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
