import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { 
      message: ""
    };
  }

  handleChange = e => {
    // let counter = 280;
    // let newMessage = e.target.message.value

    // if(counter === newMessage.length) this.state.isMax = true
    // if(this.state.isMax = false){
      this.setState({
        [e.target.name]: e.target.value
      })
    // }
  }
  render() {
    
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message} 
        onChange={this.handleChange}
        />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
