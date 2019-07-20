import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from  './SeasonDisplay';
import Spinner from './Spinner';

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

    // helper method
    // render is called twice: once while the browser is loaded then the
    // second time once the state object is updated...CONDITIONAL RENDERING IS BEING SHOWN BELOW
    renderContent() {
        // if we have an error
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>
        }
        // no error
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request."/>;
    }

    // React says we have to define render()
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
