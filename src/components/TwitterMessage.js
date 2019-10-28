import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message}/>
        <em> remaining characters: {this.props.maxChars - this.state.message.length}</em>
      </div>
    );
  }
}

export default TwitterMessage;
