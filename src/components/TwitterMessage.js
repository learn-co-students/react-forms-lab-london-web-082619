import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();


    // here we have the same name for the state key ('message') as we do for the name of the input
    // in the form itself. That way, we can have a generic 'handleChange' function (below) that 
    // will appropriately update state. 

    this.state = {
      message: "test state"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
      <div>{this.props.maxChars - this.state.message.length}</div>
      </div>

    );
  }
}

export default TwitterMessage;
