import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  };

  handleMessageChange = (event) => {
    this.setState({
      message : event.target.value
    })
  };


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value ={this.state.message}  onChange= {event => this.handleMessageChange(event)} />
        <div>{this.props.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
