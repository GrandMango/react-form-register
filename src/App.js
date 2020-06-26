import React from 'react';
import './styles.css';
import { ERRORS } from './constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    }
  };


  handelChange = fieldName => event => {
    event.preventDefault();
    if( fieldName == "username" ) {
      this.setState({ [fieldName]: event.target.value },
        () => {
           this.validUsername()
        })
    }

    if( fieldName == "password" ) {
      this.setState({ [fieldName]: event.target.value },
        () => {
           this.validPassword()
        })
    }
  }

  validUsername = () => {
    if( ERRORS.username.regex.test(this.state.username) ) {
      this.setState({ 
        usernameError: '',
      },
      () => {
        document.getElementById("username-error").innerText = this.state.usernameError;
      });
      return true;
    } else {
      this.setState({ 
        usernameError: "Username must be 6~10 characters",
       },
      () => {
        document.getElementById("username-error").innerText = this.state.usernameError;
      });
      return false;
    }
  }

  validPassword =() => {
    if( ERRORS.password.regex.test(this.state.password) ) {
      this.setState({ 
        passwordError: '',
      },
      () => {
        document.getElementById("password-error").innerText = this.state.passwordError;
      });
      return true;
    } else {
      this.setState({ 
        passwordError: "Password must be 6~10 numbers", 
      },
      () => {
        document.getElementById("password-error").innerText = this.state.passwordError;
      });
      return false;
    }
  }

  validator = () =>  {
    let isUsernameValid = this.validUsername();
    let isPasswordvalid = this.validPassword();
    if( isUsernameValid && isPasswordvalid ) {
      alert("regiester successed")
    } else {
      //alert("failed")
    }
  }

  onSubmit = async event => {
    event.preventDefault();
    this.validator()
   
    if (false) {
      alert("Regiset Successed");
    } else {
      //console.log(this.state.username + " " + this.state.password)
    }
  }

  render() {
    let error = this.state.error;
    return (
      <div className="App">
        <div className="logo">
          <img
            src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
            width="100px"
          />
        </div>
        <form 
        onSubmit={this.onSubmit}
        >
          <label for="username">
            <span className="label-star">*</span> Username:
            <input
              id="username"
              name="username"
              placeholder="6~10 characters"
              type="text"
              onChange={this.handelChange("username")}
            />
            {<error id="username-error" className="error"></error>}
          </label>
          <label for="password">
            <span className="label-star">*</span> Password:
            <input
              id="password"
              name="password"
              placeholder="6~10 numbers"
              type="password"
              onChange={this.handelChange("password")}
            />
            {<span id="password-error" className="error"></span>}
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
