import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // asynchronous request to Google to initialization the client
      window.gapi.client.init({
        clientId: '263349059781-3lq2p1ftdt6frll8t6aepn95nv0pej96.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  /** HELPER METHODS **/
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  // Helper method to determine is use is signed in
  renderAuthButton() {
    if (this.props.isSignedIn === null ) {
      return null;
    } else if (this.props.isSignedIn){
      return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon"/>
            Sign Out
          </button>
      );
    } else {
      return (
          <button onClick={this.onSignInClick} className="ui red google button">
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)
