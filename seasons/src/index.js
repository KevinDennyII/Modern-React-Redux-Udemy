import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position =>  {
                // we called setState to update our state project!!!!
                this.setState({ lat: position.coords.latitude });
                // WE DID NOT!!
                // this.state.late = position.coords.latitude
            },
            err => console.log(err)
        );
    }

    // React says we have to define render()
    render() {
        return <div>Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
