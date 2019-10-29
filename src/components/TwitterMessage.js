import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <span>Remaining characters: {this.getRemainingCharacters()}</span>
      </div>
    );
  }

  handleChange = event => {
    this.setState({message: event.target.value});
  }

  getRemainingCharacters = () => this.props.maxChars - this.state.message.length;

}

export default TwitterMessage;
