import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "test",
    password: "test"
  }

   handleUsernameChange = event => {
     this.setState({
       username: event.target.value
      })
   }

   handlePasswordChange = event => {
    this.setState({
      password: event.target.value
     })
  }

  handleSubmit = event =>{
    event.preventDefault()
    let username = this.state.username;
    let password = this.state.password;
    if (username !== "" && password !== "") { this.props.handleLogin(this.state) }

  }

  

    

  render() {
    return (
      <form onSubmit={(event) => {this.handleSubmit(event)}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
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
