import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //static contextType = LanguageContext; //contextType is a very special unique name for context

  /*** HELPER FUNCTIONS ***/
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorlaggen';
  }

  renderButton(color){
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  /*** END HELPER FUNCTIONS ***/

  render() {
    //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // providing a function is a child to a react component
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
