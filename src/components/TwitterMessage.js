import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingCharacters = () => this.props.maxChars - this.state.message.length;
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
         onChange={this.handleChange}
         value={this.state.message}
         type="text" 
         name="message" 
         id="message" 
         />
        <span>Remaining character: {this.remainingCharacters()}</span>
      </div>
    );
  }
}

export default TwitterMessage;
