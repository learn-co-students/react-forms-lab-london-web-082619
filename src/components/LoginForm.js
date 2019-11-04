import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // here we have flow control to check that both passsword and username fields in state are not empty. If BOTH are not empty, then the rest of the code body executes. I.e. it sends on the state to the handleLogin prop passed by App.js, which is a function which expects username and password - since those are the two keys of our state in this component we can just send on the state - its dynamically updated upon every keypress by the onChanges within the form inputs. Yay!
  handleSubmitEvent = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
