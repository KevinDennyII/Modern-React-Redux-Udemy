import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSigned: null }; // initializing component variable

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // asynchronous request to Google to initialization the client
      window.gapi.client.init({
        clientId: '263349059781-3lq2p1ftdt6frll8t6aepn95nv0pej96.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  /** HELPER METHODS **/

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  // Helper method to determine is use is signed in
  renderAuthButton() {
    if (this.state.isSignedIn === null ) {
      return <div>I dont know if we are signed in</div>
    } else if (this.state.isSignedIn){
      return (
          <button onClick={this.onSignOut} className="ui red google button">
            <i className="google icon"/>
            Sign Out
          </button>
      );
    } else {
      return (
          <button onClick={this.onSignIn} className="ui red google button">
            <i className="google icon"/>
            Sign In With Google
          </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
