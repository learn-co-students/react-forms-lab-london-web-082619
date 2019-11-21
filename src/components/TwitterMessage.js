import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value
    })
    console.log(this.state)
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessage}/>
        <h3>remaining chars: {this.props.maxChars - this.state.message.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
