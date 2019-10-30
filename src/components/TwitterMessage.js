import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  remainingCharacters = () => this.props.maxChars - this.state.message.length

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.props.maxChars - this.state.message.length}
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
